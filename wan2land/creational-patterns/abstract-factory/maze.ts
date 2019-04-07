// Creational Patterns 에서 공동으로 다루는 부분

export enum Direction {
  North = 0,
  South,
  East,
  West,
}

export interface MapSite {
  enter(): void
}

export interface Room extends MapSite {
  sides: MapSite[]
  roomNumber: number
  getSide(direction: Direction): MapSite
  setSide(direction: Direction, site: MapSite): void
}

export interface Wall extends MapSite {
}

export interface Door extends MapSite {
  otherSideFrom(room: Room): Room
}

export interface Maze {
  rooms: Room[]
  addRoom(room: Room): void
  roomNo(no: number): Room
}

// Abstract Factory에서만 다루는 부분
export interface MazeFactory {
  makeMaze(): Maze
  makeWall(): Wall
  makeRoom(n: number): Room
  makeDoor(r1: Room, r2: Room): Door
}

/**
 * 책에서는 다음과 같이 Static Method 를 사용하라고 하는데,
 * 
 * ex. Maze* MazeGame::CreateMaze (MazeFactoryk factory)
 * 
 * 타입스크립트에는 걍 함수 선언이 되서 걍 함수로 대체합니다.
 */
function createMaze(factory: MazeFactory) {
  const aMaze = factory.makeMaze()

  const rl = factory.makeRoom(1)
  const r2 = factory.makeRoom(2)

  const aDoor = factory.makeDoor(rl, r2)

  aMaze.addRoom(rl)
  aMaze.addRoom(r2)

  rl.setSide(Direction.North, factory.makeWall())
  rl.setSide(Direction.East, aDoor)
  rl.setSide(Direction.South, factory.makeWall())
  rl.setSide(Direction.West, factory.makeWall())
  r2.setSide(Direction.North, factory.makeWall())
  r2.setSide(Direction.East, factory.makeWall())
  r2.setSide(Direction.South, factory.makeWall())
  r2.setSide(Direction.West, aDoor)
  return aMaze
}



// 여기서부터는 이제 실제 구현체
class DefaultMaze implements Maze {

  constructor(public rooms: Room[] = []) {
  }

  public addRoom(room: Room) {
    this.rooms.push(room)
  }

  public roomNo(no: number): Room {
    const room = this.rooms.find(({roomNumber}) => roomNumber === no)
    if (!room) {
      throw new Error("룸이 없어!!")
    }
    return room
  }
}


class DefaultWall implements Wall {
  enter() {
    console.log("enter the wall")
  }
}

class DefaultRoom implements Room {
  constructor(
    public roomNumber: number,
    public sides: MapSite[] = []
  ) {
  }

  public enter() {
    console.log(`enter the ${this.roomNumber} room`)
  }

  public getSide(direction: Direction) {
    return this.sides[direction]
  }

  public setSide(direction: Direction, site: MapSite) {
    this.sides[direction] = site
  }
}

class DefaultDoor implements Door {
  constructor(public room0: Room, public room1: Room) {}

  public enter() {
    console.log(`enter the ${this.room0.roomNumber}-${this.room1.roomNumber} door`)
  }

  public otherSideFrom(room: Room): Room {
    return room === this.room0 ? this.room1 : this.room0
  }
}

class DefaultMazeFactory implements MazeFactory {
  public makeMaze() {
    return new DefaultMaze()
  }

  public makeWall() {
    return new DefaultWall()
  }

  public makeRoom(n: number) {
    return new DefaultRoom(n)
  }

  public makeDoor(r1: Room, r2: Room): Door {
    return new DefaultDoor(r1, r2)
  }
}



// Enhanced인 경우
class EnchantedRoom extends DefaultRoom {
  constructor(
    public roomNumber: number,
    public spell: string, // 책에는 Spell 타입이 있지만 귀찮아서 string으로 대체합니다.
    public sides: MapSite[] = []
  ) {
    super(roomNumber, sides)
  }
}

class DoorNeedingSpell extends DefaultDoor {}

class EnchantedMazeFactory extends DefaultMazeFactory {
  
  public makeRoom(no: number) {
    return new EnchantedRoom(no, "CastSpell()")
  }

  public makeDoor(r1: Room, r2: Room): Door {
    return new DoorNeedingSpell(r1, r2)
  }
}

class BombedWall extends DefaultWall {}

class RoomWithABomb extends DefaultRoom {}

class BombedMazeFactory extends DefaultMazeFactory {
  
  public makeWall() {
    return new BombedWall()
  }

  public makeRoom(no: number) {
    return new RoomWithABomb(no)
  }
}


console.log(createMaze(new DefaultMazeFactory()))
console.log(createMaze(new EnchantedMazeFactory()))
console.log(createMaze(new BombedMazeFactory()))


// function printMaze(maze: Maze) {
//   const points = new Map<Room, [number, number]>()
//   let pointXMin = 0
//   let pointYMin = 0

//   function calculateRoom(room: Room) {
//     if (points.get(room)) {
//       return
//     }
//     for (const direction of [Direction.East, Direction.West, Direction.North, Direction.South]) {
//       const mapsite = room.getSide(direction)
//       if ((mapsite as Door).otherSideFrom) {
//         const door = mapsite as Door
//         const otherRoom = door.otherSideFrom(room)
//         if (direction === Direction.East && otherRoom.getSide(Direction.West) !== door) {
//           throw new Error("문이 이상하게 붙어있셔!! 111")
//         }
//         if (direction === Direction.West && otherRoom.getSide(Direction.East) !== door) {
//           throw new Error("문이 이상하게 붙어있셔!! 222")
//         }
//         if (direction === Direction.North && otherRoom.getSide(Direction.South) !== door) {
//           throw new Error("문이 이상하게 붙어있셔!! 333")
//         }
//         if (direction === Direction.South && otherRoom.getSide(Direction.North) !== door) {
//           throw new Error("문이 이상하게 붙어있셔!! 444")
//         }
//       }
//     }
//   }

//   for (const room of maze.rooms) {
//     if (points.size === 0) {
//       pointXMin = 0
//       pointYMin = 0
//       points.set(room, [0, 0])
//       continue
//     }
//     calculateRoom(room)
//   }

//   console.log(points, pointXMin, pointYMin)
// }

// printMaze(createMaze(new DefaultMazeFactory()))

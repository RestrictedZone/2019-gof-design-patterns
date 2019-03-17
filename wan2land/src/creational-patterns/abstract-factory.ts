// Creational Patterns 에서 공동으로 다루는 부분

enum Direction {
  North = 0,
  South,
  East,
  West,
}

interface MapSite {
  enter(): void
}

interface Room extends MapSite {
  sides: MapSite[]
  roomNumber: number
  getSide(direction: Direction): MapSite
  setSide(direction: Direction, site: MapSite): void
}

interface Wall extends MapSite {
}

interface Door extends MapSite {
  otherSideFrom(room: Room): Room
}

interface Maze {
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

  addRoom(room: Room) {
    this.rooms.push(room)
  }

  roomNo(no: number): Room {
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

  enter() {
    console.log(`enter the ${this.roomNumber} room`)
  }

  getSide(direction: Direction) {
    return this.sides[direction]
  }

  setSide(direction: Direction, site: MapSite) {
    this.sides[direction] = site
  }
}

class DefaultDoor implements Door {
  constructor(public room0: Room, public room1: Room) {}

  enter() {
    console.log(`enter the ${this.room0.roomNumber}-${this.room1.roomNumber} door`)
  }

  otherSideFrom(room: Room): Room {
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
    public spell: string,
    public sides: MapSite[] = []
  ) {
    super(roomNumber, sides)
  }
}

class DoorNeedingSpell extends DefaultDoor {
  //
}
class EnchantedMazeFactory extends DefaultMazeFactory {
  
  makeRoom(no: number) {
    return new EnchantedRoom(no, "CastSpell()")
  }

  public makeDoor(r1: Room, r2: Room): Door {
    return new DoorNeedingSpell(r1, r2)
  }
}

console.log(createMaze(new DefaultMazeFactory()))
console.log(createMaze(new EnchantedMazeFactory()))


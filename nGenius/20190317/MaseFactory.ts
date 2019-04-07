import {Mase, Wall, Room, Door} from './Mase'

interface DefaultMaseFactory {
  MakeMase(): Mase
  MakeWall(): Wall
  MakeRoom(n: number): Room
  MakeDoor(r1: Room, r2: Room): Door
}

export class MaseFactory implements DefaultMaseFactory{
  MakeMase(): Mase {
    return new Mase()
  }  
  MakeWall(): Wall {
    return new Wall()
  }
  MakeRoom(n: number): Room {
    return new Room(n)
  }
  MakeDoor(r1: Room, r2: Room): Door {
    return new Door(r1, r2)
  }
}
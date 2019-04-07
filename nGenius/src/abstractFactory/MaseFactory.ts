import {Mase, Wall, Room, Door, EnchantedRoom, DoorNeedingSpell} from './Mase'

interface MaseFactoryStructure {
  MakeMase(): Mase
  MakeWall(): Wall
  MakeRoom(n: number): Room
  MakeDoor(r1: Room, r2: Room): Door
}

export class MaseFactory implements MaseFactoryStructure {
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
export class EnchantedMaseFactory extends MaseFactory {

  MakeRoom(n: number): Room {
    return new EnchantedRoom(n)
  }

  MakeDoor(r1:Room, r2:Room) {
    return new DoorNeedingSpell(r1, r2)
  }

}
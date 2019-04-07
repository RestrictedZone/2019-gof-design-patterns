import { MaseFactory } from "./MaseFactory"

export enum Direction { North, South, East, West }

interface MapSite {
  Enter: Function
}

export class Room implements MapSite {
  constructor(private roomNumber:number) {}

  static GetSide(d:Direction): MapSite[] {
    return []
  }
  SetSide(d:Direction, mapSite: MapSite):void {

  }

  Enter!: Function

  private _sides: MapSite[] | undefined
}

export class EnchantedRoom extends Room {
  // something Enchanted..
}

export class Wall implements MapSite {
  Enter!: Function
}

export class Door implements MapSite {
  constructor(private Room1:Room, private Room2:Room) {}

  private isOpen: boolean | undefined

  Enter!: Function
  OtherSideFrom(r:Room) {
    return r
  }
}

export class DoorNeedingSpell extends Door {
  // something Enchanted..
}

export class Mase {
  AddRoom(room:Room):void {

  }
  static RoomNo (n:number) {

  }
}

export function CreateMase(factory: MaseFactory) {
  const {North, South, East, West} = Direction
  const aMase = factory.MakeMase()
  const r1 = factory.MakeRoom(1)
  const r2 = factory.MakeRoom(2)
  const theDoor = factory.MakeDoor(r1, r2)

  aMase.AddRoom(r1)
  aMase.AddRoom(r2)

  r1.SetSide(North, factory.MakeWall())
  r1.SetSide(South, theDoor)
  r1.SetSide(East, factory.MakeWall())
  r1.SetSide(West, factory.MakeWall())


  r1.SetSide(North, factory.MakeWall())
  r1.SetSide(South, factory.MakeWall())
  r1.SetSide(East, factory.MakeWall())
  r1.SetSide(West, theDoor)

  return aMase
}
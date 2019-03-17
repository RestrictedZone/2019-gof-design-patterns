package abstract_factory_pattern.base

import abstract_factory_pattern.component.Door
import abstract_factory_pattern.component.Maze
import abstract_factory_pattern.component.Room
import abstract_factory_pattern.component.Wall

interface MazeFactory {

    fun makeMaze(): Maze

    fun makeWall(): Wall

    fun makeRoom(number: Int): Room

    fun makeDoor(room_01: Room, room_02: Room): Door

}
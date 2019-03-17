package abstract_factory_pattern

import abstract_factory_pattern.base.Direction
import abstract_factory_pattern.base.MazeFactory
import abstract_factory_pattern.component.Maze

object MazeGame {

    fun createMaze(factory: MazeFactory): Maze {
        val maze = factory.makeMaze()
        val room_01 = factory.makeRoom(1)
        val room_02 = factory.makeRoom(2)
        val door = factory.makeDoor(room_01, room_02)

        maze.addRoom(room_01)
        maze.addRoom(room_02)

        room_01.setSide(Direction.North, factory.makeWall())
        room_01.setSide(Direction.East, door)
        room_01.setSide(Direction.South, factory.makeWall())
        room_01.setSide(Direction.West, factory.makeWall())

        room_02.setSide(Direction.North, factory.makeWall())
        room_02.setSide(Direction.East, factory.makeWall())
        room_02.setSide(Direction.South, factory.makeWall())
        room_02.setSide(Direction.West, door)

        return maze
    }

}
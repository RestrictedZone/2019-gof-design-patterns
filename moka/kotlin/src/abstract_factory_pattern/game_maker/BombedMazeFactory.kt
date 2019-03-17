package abstract_factory_pattern.game_maker

import abstract_factory_pattern.base.MazeFactory
import abstract_factory_pattern.component.Door
import abstract_factory_pattern.component.Maze
import abstract_factory_pattern.component.Room
import abstract_factory_pattern.component.Wall

class BombedMazeFactory : MazeFactory {

    override fun makeMaze(): Maze {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun makeWall(): Wall {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun makeRoom(number: Int): Room {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun makeDoor(room_01: Room, room_02: Room): Door {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}
package abstract_factory_pattern.component

import abstract_factory_pattern.base.MapSite

class Door(var room_01: Room, var room_2: Room) : MapSite {

    var isOpen: Boolean = false

    override fun enter() {
    }

    fun otherSizeFrom(room: Room): Room {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}
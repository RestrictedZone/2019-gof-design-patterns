package abstract_factory_pattern.component

import abstract_factory_pattern.base.Direction
import abstract_factory_pattern.base.MapSite

class Room(var roomNumber: Int) : MapSite() {

    var mapSite: HashMap<Int, MapSite> = hashMapOf()

    override fun enter() {

    }

    fun setSide(direction: Direction, mapSite: MapSite) {
    }

    fun getSize() {

    }

}
import abc

from enum import IntEnum


class Direction(IntEnum):
    North = 0
    South = 1
    East = 2
    West = 3


class MapSite(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def enter(self):
        raise NotImplementedError


class Room(MapSite):
    def __init__(self, room_no):
        self._sides = [None] * 4
        self._room_number = room_no

    @property
    def room_number(self):
        return self._room_number

    def get_side(self, direction):
        return self._sides[direction]

    def set_side(self, direction, map_site):
        self._sides[direction] = map_site

    def enter(self):
        print('room enter')


class Wall(MapSite):
    def enter(self):
        print('wall enter')


class Door(MapSite):
    def __init__(self, room1, room2):
        self._room1 = room1
        self._room2 = room2
        self._is_open = False

    def enter(self):
        print('door enter')

    def other_side_from(self, room: Room) -> Room:
        pass


class Maze:
    def __init__(self):
        self.rooms = []

    def add_room(self, room):
        self.rooms.append(room)

    def room_no(self, no: int):
        return [r for r in self.rooms if r.room_number == no].pop()


class CreateMaze:
    @classmethod
    def maze_game(cls):
        a_maze = Maze()
        r1 = Room(1)
        r2 = Room(2)
        the_door = Door(r1, r2)

        a_maze.add_room(r1)
        a_maze.add_room(r2)

        r1.set_side(Direction.North, Wall())
        r1.set_side(Direction.East, the_door)
        r1.set_side(Direction.South, Wall())
        r1.set_side(Direction.West, Wall())

        r2.set_side(Direction.North, Wall())
        r2.set_side(Direction.East, Wall())
        r2.set_side(Direction.South, Wall())
        r2.set_side(Direction.West, the_door)

        return a_maze


if __name__ == '__main__':
    game = CreateMaze.maze_game()
    room = game.room_no(2)
    room.enter()
    room.get_side(Direction.East).enter()
    room.get_side(Direction.West).enter()


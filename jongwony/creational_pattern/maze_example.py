import abc
from enum import Enum


class Direction(Enum):
    North = 1
    South = 2
    East = 3
    West = 4


class MapSite(metaclass=abc.ABCMeta):
    @abc.abstractmethod
    def enter(self):
        raise NotImplementedError


class Room(MapSite):
    def get_side(self, direction) -> MapSite:
        pass

    def set_side(self, direction, mapsite):
        pass

    def enter(self):
        print('room enter')

    def __init__(self, room_no):
        self._sides = []
        self._room_number = room_no


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

    def other_side_from(room: Room) -> Room:
        pass


class Maze:
    def add_room(self, room):
        pass

    def room_no(self, no: int):
        pass


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



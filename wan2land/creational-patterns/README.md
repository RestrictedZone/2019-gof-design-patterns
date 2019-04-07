# 1. 생성패턴 (Creational Patterns)

생성패턴은 객체 생성에 관여하는 패턴입니다.

이 챕터를 요약하면 다음으로 요약할 수 있습니다.

- If CreateMaze calls virtual functions instead of constructor calls to create the rooms, walls, and doors it requires, then you can change the classes that get instantiated by making a subclass of MazeGame and redefining those virtual functions. This approach is an example of the Factory Method (107)pattern.
- IfCreateMazeispassedanobjectasaparametertousetocreaterooms,walls, and doors, then you can change the classes of rooms, walls, and doors by passing a different parameter. This is an example of the Abstract Factory (87) pattern.
- IfCreateMazeispassedanobjectthatcancreateanewmazeinitsentiretyusing operations for adding rooms, doors, and walls to the maze it builds, then you can use inheritance to change parts of the maze or the way the maze is built. This is an example of the Builder (97)pattern.
- If CreateMaze is parameterized by various prototypical room, door, and wall objects, which it then copies and adds to the maze, then you can change the maze's composition by replacing these prototypical objects with different ones. This is an example of the Prototype (117) pattern.

## 세부구현

- [1.1. 팩토리 (Factory)](./factory/README.md) : GoF에서 다루지는 않지만 Factory 자체를 알아야 이 다음 내용이 연결됩니다.
- [1.2. 추상팩토리 (Abstract Factory)](./abstract-factory/README.md)

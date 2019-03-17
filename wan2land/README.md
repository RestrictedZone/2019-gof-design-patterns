# GoF Design Patterns by Wani

## Creational Patterns

여기 챕터 요약하면 다음과 같다.

- 필요한 rooms, walls, doors 정보를 CreateMaze를 통해 생성한다면, MazeGame의 서브클래스 (나중에 번역해야지..)
- If CreateMaze calls virtual functions instead of constructor calls to create the rooms, walls, and doors it requires, then you can change the classes that get instantiated by making a subclass of MazeGame and redefining those virtual functions. This approach is an example of the Factory Method (107)pattern.
- IfCreateMazeispassedanobjectasaparametertousetocreaterooms,walls, and doors, then you can change the classes of rooms, walls, and doors by passing a different parameter. This is an example of the Abstract Factory (87) pattern.
- IfCreateMazeispassedanobjectthatcancreateanewmazeinitsentiretyusing operations for adding rooms, doors, and walls to the maze it builds, then you can use inheritance to change parts of the maze or the way the maze is built. This is an example of the Builder (97)pattern.
- If CreateMaze is parameterized by various prototypical room, door, and wall objects, which it then copies and adds to the maze, then you can change the maze's composition by replacing these prototypical objects with different ones. This is an example of the Prototype (117) pattern.


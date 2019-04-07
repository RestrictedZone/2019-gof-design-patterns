import { Maze } from "./abstract-factory"

interface MazeBuilder {
  buildMaze(): void
  buildRoom(room: number): void
  buildDoor(roomFrom: number, roomTo: number): void
  getMaze(): Maze
}

/**
 * 이제 같음 함수를 Builder 패턴으로 만들어 봅시다.
 */
function createMaze(builder: MazeBuilder) {
  // 여기서 newBuild 하는데 이게 올바른 행위인가요...?;; builder 는 new 했을 때 그 자체가 하나의 빌더를 생성해야하는거 아닌가.....?
  // builder 패턴과 factory 패턴의 가장 큰 차이는 instance하나로 가져가느냐, singleton 으로 유지해야하느냐로 알고 있는데 흠.뭔.이상...
  builder.buildMaze() 
  builder.buildRoom(1)
  builder.buildRoom(2)
  builder.buildDoor(1, 2)
  return builder.getMaze()
}


function createComplexMaze(builder: MazeBuilder) {
  for (let i = 1; i <= 1001; i++) {
    builder.buildRoom(i)
  }
  return builder.getMaze()
}

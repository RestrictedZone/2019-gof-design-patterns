import abstract_factory_pattern.MazeGame
import abstract_factory_pattern.game_maker.BombedMazeFactory
import abstract_factory_pattern.game_maker.EnchantedMazeFactory

fun main(args: Array<String>) {

    val bombedMaze = MazeGame.createMaze(BombedMazeFactory())
    val enchantedMaze = MazeGame.createMaze(EnchantedMazeFactory())


}
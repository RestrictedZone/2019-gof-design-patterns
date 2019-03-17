import abstract_factory_pattern.MazeGame
import abstract_factory_pattern.game_maker.EnchantedMazeFactory

fun main(args: Array<String>) {
    MazeGame.createMaze(EnchantedMazeFactory())
}
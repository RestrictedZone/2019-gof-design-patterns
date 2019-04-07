import { CreateMase } from "./Mase"
import { MaseFactory, EnchantedMaseFactory } from "./MaseFactory"

const mase = CreateMase(new EnchantedMaseFactory())


// 추상화 객체들입니다.
interface CarFactory {
  createWheels(): Wheel[]
  createEngine(): Engine
}

interface Wheel {}
interface Engine {}



// 실제 구현체
class TruckFactory implements CarFactory{
  public createWheels() {
    // 바퀴가 6개!!
    return [
      new TruckWheel(),
      new TruckWheel(),
      new TruckWheel(),
      new TruckWheel(),
      new TruckWheel(),
    ]
  }

  public createEngine() {
    return new TruckEngine()
  }
}

class TruckWheel implements Wheel {}
class TruckEngine implements Engine {}


class BusFactory implements CarFactory{
  public createWheels() {
    return [
      new BusWheel(),
      new BusWheel(),
      new BusWheel(),
      new BusWheel(),
    ]
  }

  public createEngine() {
    return new BusEngine()
  }
}

class BusWheel implements Wheel {}
class BusEngine implements Engine {}


// 자동차를 만드는 Client
class Client {
  constructor(public factory: CarFactory) {
  }

  createCar() {
    const wheels = this.factory.createWheels()
    const engine = this.factory.createEngine()

    // 자동차 생산완료!
    return {
      engine,
      wheels,
    }
  }
}


// 만약에 버스를 만들어야 한다면..
{
  const client = new Client(new BusFactory())
  console.log(client.createCar()) // 자동차 생산완료  
}

// 만약에 트럭을 만들어야 한다면..
{
  const client = new Client(new TruckFactory())
  console.log(client.createCar()) // 자동차 생산완료  
}

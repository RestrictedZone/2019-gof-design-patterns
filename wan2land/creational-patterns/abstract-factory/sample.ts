
// 추상화 객체들입니다.

interface CarFactory {
  createWheel(): WheelInterface
  createWindow(): WindowInterface
}

interface WheelInterface {}
interface WindowInterface {}

// 실제 구현체
class BenzzFactory implements CarFactory{
  public createWheel() {
    return new BenzzWheel()
  }
  public createWindow() {
    return new BenzzWindow()
  }
}

class BenzzWheel implements WheelInterface {}
class BenzzWindow implements WindowInterface {}


class TeslaaFactory implements CarFactory{
  public createWheel() {
    return new TeslaaWheel()
  }
  public createWindow() {
    return new TeslaaWindow()
  }
}

class TeslaaWheel implements WheelInterface {}
class TeslaaWindow implements WindowInterface {}


class Client {
  constructor(public factory: CarFactory) {
  }

  createCar() {
    const wheel1 = this.factory.createWheel()
    const wheel2 = this.factory.createWheel()
    const wheel3 = this.factory.createWheel()
    const wheel4 = this.factory.createWheel()
    const window = this.factory.createWindow()

    // 자동차 생산완료!
    return {
      window: window,
      wheels: [wheel1, wheel2, wheel3, wheel4],
    }
  }
}


// 만약에 Teslaa 자동차를 만들어야 한다면..
{
  const client = new Client(new TeslaaFactory())
  console.log(client.createCar()) // 자동차 생산완료  
}

// 만약에 Benzz 자동차를 만들어야 한다면..
{
  const client = new Client(new BenzzFactory())
  console.log(client.createCar()) // 자동차 생산완료  
}

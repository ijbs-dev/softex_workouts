  // Cliente

  class Client {
    constructor(factory) {
      this.factory = factory;
    }
  
    buildComputer(ram, hdd, cpu) {
      return this.factory.createComputer(ram, hdd, cpu);
    }
  }

    export default Client;
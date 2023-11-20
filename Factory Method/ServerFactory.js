  // Fábrica concreta para criar Servidores

    import Computer from './Computer.js';
    import ComputerFactory from './ComputerFactory.js';
  
  class ServerFactory extends ComputerFactory {
    createComputer(ram, hdd, cpu) {
      return new Computer(ram, hdd, cpu, 'Server');
    }
  }

    export default ServerFactory;
  // Fábrica concreta para criar PCs

  import Computer from './Computer.js';
  import ComputerFactory from './ComputerFactory.js';

  class PCFactory extends ComputerFactory {
    createComputer(ram, hdd, cpu) {
      return new Computer(ram, hdd, cpu, 'PC');
    }
  }

    export default PCFactory;
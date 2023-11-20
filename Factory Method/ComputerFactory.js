  // Fábrica abstrata

  import Computer from './Computer.js';

  class ComputerFactory extends Computer{
    createComputer(ram, hdd, cpu) {
      throw new Error("O método createComputer deve ser implementado pela subclasse");
    }
  }

    export default ComputerFactory;








/**
 * 
 * Usando padrao de projeto Factory Method, Considere que:

- os produtos devem implementar uma interface comum;

- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface; -

todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type; - há dois tipos de computadores: pc e server; - RAM e HD devem estar em GB;

CPU deve estar em GHz;

através do tipo informado, a fábrica decide qual tipo de computador irá instanciar, quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto lado para que outros desenvolvedores possam analisá-lo.
 * 
 * 
 *  */


/* // Interface comum para os produtos (Computadores)
class Computer {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    toString() {
      return `${this.type} - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  } */
  
/*   // Fábrica abstrata
  class ComputerFactory {
    createComputer(ram, hdd, cpu) {
      throw new Error("O método createComputer deve ser implementado pela subclasse");
    }
  } */
  
 /*  // Fábrica concreta para criar PCs
  class PCFactory extends ComputerFactory {
    createComputer(ram, hdd, cpu) {
      return new Computer(ram, hdd, cpu, 'PC');
    }
  } */
  
/*   // Fábrica concreta para criar Servidores
  class ServerFactory extends ComputerFactory {
    createComputer(ram, hdd, cpu) {
      return new Computer(ram, hdd, cpu, 'Server');
    }
  } */
  
/*   // Cliente
  class Client {
    constructor(factory) {
      this.factory = factory;
    }
  
    buildComputer(ram, hdd, cpu) {
      return this.factory.createComputer(ram, hdd, cpu);
    }
  } */

  // Exemplo de uso

  //importando classes

    import PCFactory from './PCFactory.js';
    import ServerFactory from './ServerFactory.js';
    import Client from './Client.js';
      
  const pcFactory = new PCFactory();
  const serverFactory = new ServerFactory();
  
  const client = new Client(pcFactory);
  const pc = client.buildComputer(8, 500, 2.5);
  console.log(pc.toString());
  
  client.factory = serverFactory;
  const server = client.buildComputer(16, 1000, 3.0);
  console.log(server.toString());
  

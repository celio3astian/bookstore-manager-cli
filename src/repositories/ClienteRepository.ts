import type { Cliente } from "../models/Cliente";

export class ClienteRepository {

  private clientes: Cliente[] = [];

  criar(cliente: Cliente): Cliente {
    this.clientes.push(cliente);
    return cliente;
  }

  listar(): Cliente[] {
    return this.clientes;
  }

  buscarPorId(id: number): Cliente | undefined {
    return this.clientes.find(
      cliente => cliente.id === id
    );
  }

  remover(id: number): boolean {

    const index = this.clientes.findIndex(
      cliente => cliente.id === id
    );

    if (index === -1) {
      return false;
    }

    this.clientes.splice(index, 1);

    return true;
  }
}
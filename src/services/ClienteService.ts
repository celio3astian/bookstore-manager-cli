import { ClienteRepository } from "../repositories/ClienteRepository";
import { Cliente } from "../models/Cliente";

export class ClienteService {

    constructor(
        private repository: ClienteRepository
    ) { }

    criarCliente(cliente: Cliente) {
        return this.repository.criar(cliente);
    }

    listarClientes() {
        return this.repository.listar();
    }

    buscarCliente(id: number) {
        return this.repository.buscarPorId(id);
    }

    removerCliente(id: number) {
        return this.repository.remover(id);
    }
}
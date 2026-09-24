import { EmprestimoRepository } from "../repositories/EmprestimoRepository";
import { Emprestimo } from "../models/Emprestimo";

export class EmprestimoService {

    constructor(
        private repository: EmprestimoRepository
    ) { }

    criarEmprestimo(emprestimo: Emprestimo) {
        return this.repository.criar(emprestimo);
    }

    listarEmprestimos() {
        return this.repository.listar();
    }

    buscarEmprestimo(id: number) {
        return this.repository.buscarPorId(id);
    }

    removerEmprestimo(id: number) {
        return this.repository.remover(id);
    }
}
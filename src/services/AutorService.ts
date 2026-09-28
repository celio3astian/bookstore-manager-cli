import { AutorRepository } from "../repositories/AutorRepository";
import { Autor } from "../models/Autor";

export class AutorService {

    constructor(
        private repository: AutorRepository
    ) { }

    criarAutor(autor: Autor) {
        return this.repository.criar(autor);
    }

    listarAutores() {
        return this.repository.listar();
    }

    buscarAutor(id: number) {
        return this.repository.buscarPorId(id);
    }

    removerAutor(id: number) {
        return this.repository.remover(id);
    }
}
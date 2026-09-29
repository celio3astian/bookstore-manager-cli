import { LivroRepository } from "../repositories/LivroRepository";
import type { Livro } from "../models/Livro";

export class LivroService {

    private repository: LivroRepository;

    constructor() {
        this.repository = new LivroRepository();
    }

    criarLivro(livro: Livro): Livro {
        return this.repository.criar(livro);
    }

    listarLivros(): Livro[] {
        return this.repository.listar();
    }

    buscarLivro(id: number): Livro | undefined {
        return this.repository.buscarPorId(id);
    }

    removerLivro(id: number): boolean {
        return this.repository.remover(id);
    }
}
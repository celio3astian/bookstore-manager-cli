import { LivroRepository } from "../repositories/LivroRepository";
import { Livro } from "../models/Livro";

export class LivroService {

  constructor(
    private repository: LivroRepository
  ) {}

  async criarLivro(livro: Livro) {
    return await this.repository.criar(livro);
  }

  async listarLivros() {
    return await this.repository.listar();
  }

  async buscarLivro(id: number) {
    return await this.repository.buscarPorId(id);
  }

  async removerLivro(id: number) {
    return await this.repository.remover(id);
  }
}

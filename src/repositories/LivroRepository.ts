import type { Livro } from "../models/Livro";

export class LivroRepository {
    
    private livros: Livro[] = [];

  criar(livro: Livro): Livro {
    this.livros.push(livro);
    return livro;
  }

  listar(): Livro[] {
    return this.livros;
  }

  buscarPorId(id: number): Livro | undefined {
    return this.livros.find(
      (livro) => livro.id === id
    );
  }

  remover(id: number): boolean {
    const index = this.livros.findIndex(
      (livro) => livro.id === id
    );

    if (index === -1) {
      return false;
    }

    this.livros.splice(index, 1);

    return true;
  }
}
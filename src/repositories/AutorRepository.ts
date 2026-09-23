import type { Autor } from "../models/Autor";

export class AutorRepository {

  private autores: Autor[] = [];

  criar(autor: Autor): Autor {
    this.autores.push(autor);
    return autor;
  }

  listar(): Autor[] {
    return this.autores;
  }

  buscarPorId(id: number): Autor | undefined {
    return this.autores.find(
      autor => autor.id === id
    );
  }

  remover(id: number): boolean {

    const index = this.autores.findIndex(
      autor => autor.id === id
    );

    if (index === -1) {
      return false;
    }

    this.autores.splice(index, 1);

    return true;
  }
}
import type { Livro } from "../models/Livro";
import { connection } from "../database/connection";
import { BaseRepository } from "./BaseRepository";


export class LivroRepository implements BaseRepository<Livro> {

  async criar(livro: Livro): Promise<Livro> {
    const resultado = await connection.query(
      `
      INSERT INTO livros (titulo, ano_publicacao, autor_id)
      VALUES ($1, $2, $3)
      RETURNING id, titulo, ano_publicacao, autor_id
      `,
      [livro.titulo, livro.ano_publicacao, livro.autor_id]
    );

    return resultado.rows[0];
  }

  async listar(): Promise<Livro[]> {
    const resultado = await connection.query(
      `
      SELECT id, titulo, ano_publicacao, autor_id
      FROM livros
      ORDER BY id
      `
    );

    return resultado.rows;
  }

  async buscarPorId(id: number): Promise<Livro | undefined> {
    const resultado = await connection.query(
      `
      SELECT id, titulo, ano_publicacao, autor_id
      FROM livros
      WHERE id = $1
      `,
      [id]
    );

    return resultado.rows[0];
  }

  async remover(id: number): Promise<boolean> {
    const resultado = await connection.query(
      `
      DELETE FROM livros
      WHERE id = $1
      `,
      [id]
    );

    return (resultado.rowCount ?? 0) > 0;
  }
}

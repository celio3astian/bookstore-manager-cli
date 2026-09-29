import type { Autor } from "../models/Autor";
import { connection } from "../database/connection";

export class AutorRepository {

  async criar(autor: Autor): Promise<Autor> {
    const resultado = await connection.query(
      `
      INSERT INTO autores (nome, nacionalidade)
      VALUES ($1, $2)
      RETURNING id, nome, nacionalidade
      `,
      [autor.nome, autor.nacionalidade]
    );

    return resultado.rows[0];
  }

  async listar(): Promise<Autor[]> {
    const resultado = await connection.query(
      `
      SELECT id, nome, nacionalidade
      FROM autores
      ORDER BY id
      `
    );

    return resultado.rows;
  }

  async buscarPorId(id: number): Promise<Autor | undefined> {
    const resultado = await connection.query(
      `
      SELECT id, nome, nacionalidade
      FROM autores
      WHERE id = $1
      `,
      [id]
    );

    return resultado.rows[0];
  }

  async remover(id: number): Promise<boolean> {
    const resultado = await connection.query(
      `
      DELETE FROM autores
      WHERE id = $1
      `,
      [id]
    );

    return (resultado.rowCount ?? 0) > 0;
  }

  async atualizar(autor: Autor): Promise<Autor | undefined> {
    const resultado = await connection.query(
      `
      UPDATE autores
      SET nome = $1,
          nacionalidade = $2
      WHERE id = $3
      RETURNING id, nome, nacionalidade
      `,
      [autor.nome, autor.nacionalidade, autor.id]
    );

    return resultado.rows[0];
  }
}

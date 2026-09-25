export interface LivroInterface {
  id: number;
  titulo: string;
  ano_publicacao: number;
  autor_id: number;
}

export class Livro implements LivroInterface {
  constructor(
    public id: number,
    public titulo: string,
    public ano_publicacao: number,
    public autor_id: number
  ) {}
}
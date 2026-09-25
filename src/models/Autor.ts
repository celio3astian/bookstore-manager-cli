export interface AutorInterface {
  id: number;
  nome: string;
  nacionalidade: string;
}

export class Autor implements AutorInterface {
  constructor(
    public id: number,
    public nome: string,
    public nacionalidade: string
  ) {}
}
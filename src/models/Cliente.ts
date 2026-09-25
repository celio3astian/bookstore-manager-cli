export interface ClienteInterface {
  id: number;
  nome: string;
  email: string;
}

export class Cliente implements ClienteInterface {
  constructor(
    public id: number,
    public nome: string,
    public email: string
  ) {}
}
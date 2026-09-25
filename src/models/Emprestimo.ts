export interface EmprestimoInterface {
  id: number;
  cliente_id: number;
  livro_id: number;
  data_emprestimo: Date;
  data_devolucao: Date | null;
}

export class Emprestimo implements EmprestimoInterface {
  constructor(
    public id: number,
    public cliente_id: number,
    public livro_id: number,
    public data_emprestimo: Date,
    public data_devolucao: Date | null
  ) {}
}
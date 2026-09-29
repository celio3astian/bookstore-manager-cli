export interface Emprestimo {
  id: number;
  cliente_id: number;
  livro_id: number;
  data_emprestimo: Date;
  data_devolucao?: Date;
}
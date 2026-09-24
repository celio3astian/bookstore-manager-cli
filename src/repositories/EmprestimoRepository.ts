import type { Emprestimo } from "../models/Emprestimo";

export class EmprestimoRepository {

  private emprestimos: Emprestimo[] = [];

  criar(emprestimo: Emprestimo): Emprestimo {
    this.emprestimos.push(emprestimo);
    return emprestimo;
  }

  listar(): Emprestimo[] {
    return this.emprestimos;
  }

  buscarPorId(id: number): Emprestimo | undefined {
    return this.emprestimos.find(
      emprestimo => emprestimo.id === id
    );
  }

  remover(id: number): boolean {

    const index = this.emprestimos.findIndex(
      emprestimo => emprestimo.id === id
    );

    if (index === -1) {
      return false;
    }

    this.emprestimos.splice(index, 1);

    return true;
  }
}
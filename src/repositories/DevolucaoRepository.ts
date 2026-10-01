import type { Devolucao } from "../models/Devolucao";
import { BaseRepository } from "./BaseRepository";

export class DevolucaoRepository implements BaseRepository<Devolucao> {

  private devolucoes: Devolucao[] = [];

  criar(devolucao: Devolucao): Devolucao {
    this.devolucoes.push(devolucao);
    return devolucao;
  }

  async listar(): Promise<Devolucao[]> {
    return this.devolucoes;
  }

  buscarPorId(id: number): Devolucao | undefined {
    return this.devolucoes.find(
      devolucao => devolucao.id === id
    );
  }

  remover(id: number): boolean {
    const index = this.devolucoes.findIndex(
      devolucao => devolucao.id === id
    );

    if (index === -1) {
      return false;
    }

    this.devolucoes.splice(index, 1);

    return true;
  }
}
import { DevolucaoRepository } from "../repositories/DevolucaoRepository";
import type { Devolucao } from "../models/Devolucao";

export class DevolucaoService {

  constructor(
    private repository: DevolucaoRepository
  ) {}

  criarDevolucao(devolucao: Devolucao) {
    return this.repository.criar(devolucao);
  }

  listarDevolucoes() {
    return this.repository.listar();
  }

  buscarDevolucao(id: number) {
    return this.repository.buscarPorId(id);
  }

  removerDevolucao(id: number) {
    return this.repository.remover(id);
  }
}
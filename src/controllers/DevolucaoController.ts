import { DevolucaoService } from "../services/DevolucaoService";


export class DevolucaoController {

  constructor(
    private service: DevolucaoService
  ) {}

  listar(){
    return this.service.listarDevolucoes();
}

  criar(devolucao:any){
    return this.service.criarDevolucao(devolucao);
  }

  buscar(id:number){
    return this.service.buscarDevolucao(id);
  }

  remover(id:number){
    return this.service.removerDevolucao(id);
  }
}
import { EmprestimoService } from "../services/EmprestimoService";


export class EmprestimoController {

 constructor(
   private service: EmprestimoService
 ) {}

 listar(){
   return this.service.listarEmprestimos();
 }

 criar(emprestimo:any){
   return this.service.criarEmprestimo(emprestimo);
 }

 buscar(id:number){
   return this.service.buscarEmprestimo(id);
 }

 remover(id:number){
   return this.service.removerEmprestimo(id);
 }
}
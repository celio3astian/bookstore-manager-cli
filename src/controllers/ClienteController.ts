import { ClienteService } from "../services/ClienteService";


export class ClienteController {

 constructor(
   private service: ClienteService
 ) {}

 listar(){
   return this.service.listarClientes();
 }

 criar(cliente:any){
   return this.service.criarCliente(cliente);
 }

 buscar(id:number){
   return this.service.buscarCliente(id);
 }

 remover(id:number){
   return this.service.removerCliente(id);
 }
}
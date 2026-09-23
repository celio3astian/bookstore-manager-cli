import { AutorService } from "../services/AutorService";


export class AutorController {

 constructor(
   private service: AutorService
 ) {}

 listar(){
   return this.service.listarAutores();
 }

 criar(autor:any){
   return this.service.criarAutor(autor);
 }

 buscar(id:number){
   return this.service.buscarAutor(id);
 }

 remover(id:number){
   return this.service.removerAutor(id);
 }
}
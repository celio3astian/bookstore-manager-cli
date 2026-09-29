import { LivroService } from "../services/LivroService";

export class LivroController {

    constructor(
        private service: LivroService
    ) {}

    listar() {
        return this.service.listarLivros();
    }

    criar(livro: any) {
        return this.service.criarLivro(livro);
    }

    buscar(id: number) {
        return this.service.buscarLivro(id);
    }

    remover(id: number) {
        return this.service.removerLivro(id);
    }
}
import { AutorRepository } from "../repositories/AutorRepository";
import { LivroRepository } from "../repositories/LivroRepository";
import { ClienteRepository } from "../repositories/ClienteRepository";
import { EmprestimoRepository } from "../repositories/EmprestimoRepository";
import { DevolucaoRepository } from "../repositories/DevolucaoRepository";
import { Livro } from "../models/Livro";
import { Emprestimo } from "../models/Emprestimo";
import { Cliente } from "../models/Cliente";

export class RelatorioService {
    constructor(
        private autorRepository: AutorRepository,
        private livroRepository: LivroRepository,
        private clienteRepository: ClienteRepository,
        private emprestimoRepository: EmprestimoRepository,
        private devolucaoRepository: DevolucaoRepository
    ) { }

    private listarEmprestimosAtivos(): Emprestimo[] {
        const emprestimos = this.emprestimoRepository.listar();
        const devolucoes = this.devolucaoRepository.listar();

        return emprestimos.filter(
            (emprestimo) =>
                !devolucoes.some(
                    (devolucao) => devolucao.emprestimo_id === emprestimo.id
                )
        );
    }

    async listarLivrosDisponiveis(): Promise<Livro[]> {
        const livros = await this.livroRepository.listar();
        const emprestimosAtivos = this.listarEmprestimosAtivos();

        return livros.filter(
            (livro) =>
                !emprestimosAtivos.some(
                    (emprestimo) => emprestimo.livro_id === livro.id
                )
        );
    }

    async listarLivrosEmprestados(): Promise<Livro[]> {
        const livros = await this.livroRepository.listar();
        const emprestimosAtivos = this.listarEmprestimosAtivos();

        return livros.filter(
            (livro) =>
                emprestimosAtivos.some(
                    (emprestimo) => emprestimo.livro_id === livro.id
                )
        );
    }

    async listarLivrosPorAutor(): Promise<{ autor: string; livro: string }[]> {
        const autores = await this.autorRepository.listar();
        const livros = await this.livroRepository.listar();

        return autores.flatMap((autor) => {
            const livrosDoAutor = livros.filter(
                (livro) => livro.autor_id === autor.id
            );

            return livrosDoAutor.map((livro) => ({
                autor: autor.nome,
                livro: livro.titulo
            }));
        });
    }

    async listarQuantidadeEmprestimosPorLivro(): Promise<{ livro: string; quantidade_emprestimos: number }[]> {
        const livros = await this.livroRepository.listar();
        const emprestimos = this.emprestimoRepository.listar();

        return livros.map((livro) => ({
            livro: livro.titulo,
            quantidade_emprestimos: emprestimos.filter(
                (emprestimo) => emprestimo.livro_id === livro.id
            ).length
        }));
    }

    listarClientesComEmprestimosAtivos(): Cliente[] {
        const clientes = this.clienteRepository.listar();
        const emprestimosAtivos = this.listarEmprestimosAtivos();

        return clientes.filter((cliente) =>
            emprestimosAtivos.some(
                (emprestimo) => emprestimo.cliente_id === cliente.id
            )
        );
    }
}

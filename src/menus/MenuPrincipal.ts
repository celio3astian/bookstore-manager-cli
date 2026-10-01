import * as readline from "readline";
import { AutorController } from "../controllers/AutorController";
import { AutorService } from "../services/AutorService";
import { AutorRepository } from "../repositories/AutorRepository";

import { LivroController } from "../controllers/LivroController";
import { LivroService } from "../services/LivroService";
import { LivroRepository } from "../repositories/LivroRepository";

import { ClienteController } from "../controllers/ClienteController";
import { ClienteService } from "../services/ClienteService";
import { ClienteRepository } from "../repositories/ClienteRepository";

import { EmprestimoController } from "../controllers/EmprestimoController";
import { EmprestimoService } from "../services/EmprestimoService";
import { EmprestimoRepository } from "../repositories/EmprestimoRepository";

import { DevolucaoController } from "../controllers/DevolucaoController";
import { DevolucaoService } from "../services/DevolucaoService";
import { DevolucaoRepository } from "../repositories/DevolucaoRepository";

import { RelatorioService } from "../services/RelatorioService";


export class MenuPrincipal {

  private rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  private autorRepository = new AutorRepository();
  private livroRepository = new LivroRepository();
  private clienteRepository = new ClienteRepository();
  private emprestimoRepository = new EmprestimoRepository();
  private devolucaoRepository = new DevolucaoRepository();

  private autorController = new AutorController(
    new AutorService(this.autorRepository)
  );

  private livroController = new LivroController(
    new LivroService(this.livroRepository)
  );

  private clienteController = new ClienteController(
    new ClienteService(this.clienteRepository)
  );

  private emprestimoController = new EmprestimoController(
    new EmprestimoService(this.emprestimoRepository)
  );

  private devolucaoController = new DevolucaoController(
  new DevolucaoService(this.devolucaoRepository)
);

  private relatorioService = new RelatorioService(
    this.autorRepository,
    this.livroRepository,
    this.clienteRepository,
    this.emprestimoRepository,
    this.devolucaoRepository
  );


  exibir(): void {
    console.log("\n=== BOOKSTORE MANAGER CLI ===");
    console.log("1. Autores");
    console.log("2. Livros");
    console.log("3. Clientes");
    console.log("4. Empréstimos");
    console.log("5. Relatórios");
    console.log("6. Encerrar aplicação");

    this.rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          this.menuAutores();
          break;

        case "2":
          this.menuLivros();
          break;

        case "3":
          this.menuClientes();
          break;

        case "4":
          this.menuEmprestimos();
          break;

        case "5":
          this.menuRelatorios();
          break;

        case "6":
          console.log("Aplicação encerrada.");
          this.rl.close();
          break;

        default:
          console.log("Opção inválida.");
          this.exibir();
      }
    });
  }

  private menuAutores(): void {
    console.log("\n=== AUTORES ===");
    console.log("1. Listar autores");
    console.log("2. Buscar autor por ID");
    console.log("3. Criar autor");
    console.log("4. Atualizar autor");
    console.log("5. Remover autor");
    console.log("6. Voltar");

    this.rl.question("Escolha uma opção: ", async (opcao) => {

      switch (opcao) {

        case "1": {
          const autores = await this.autorController.listar();

          console.table(autores);

          this.menuAutores();
          break;
        }

        case "2":
          this.rl.question("Digite o ID do autor: ", async (id) => {

            const autor = await this.autorController.buscar(Number(id));

            if (!autor) {
              console.log("Autor não encontrado.");
            } else {
              console.table([autor]);
            }

            this.menuAutores();
          });
          break;

        case "3":
          this.rl.question("Nome do autor: ", (nome) => {

            this.rl.question("Nacionalidade: ", async (nacionalidade) => {

              const autor = await this.autorController.criar({
                id: 0,
                nome,
                nacionalidade
              });

              console.log("Autor criado com sucesso:");
              console.table([autor]);

              this.menuAutores();
            });
          });
          break;

        case "4":
          this.rl.question("ID do autor: ", (id) => {

            this.rl.question("Novo nome: ", (nome) => {

              this.rl.question("Nova nacionalidade: ", async (nacionalidade) => {

                const autor = await this.autorController.atualizar({
                  id: Number(id),
                  nome,
                  nacionalidade
                });

                if (!autor) {
                  console.log("Autor não encontrado.");
                } else {
                  console.log("Autor atualizado com sucesso:");
                  console.table([autor]);
                }

                this.menuAutores();
              });
            });
          });
          break;

        case "5":
          this.rl.question("ID do autor: ", async (id) => {

            const removido = await this.autorController.remover(Number(id));

            if (!removido) {
              console.log("Autor não encontrado.");
            } else {
              console.log("Autor removido com sucesso.");
            }

            this.menuAutores();
          });
          break;

        case "6":
          this.exibir();
          break;

        default:
          console.log("Opção inválida.");
          this.menuAutores();
      }
    });
  }
  private menuLivros(): void {
    console.log("\n=== LIVROS ===");
    console.log("1. Listar livros");
    console.log("2. Buscar livro por ID");
    console.log("3. Criar livro");
    console.log("4. Remover livro");
    console.log("5. Voltar");

    this.rl.question("Escolha uma opção: ", async (opcao) => {
      switch (opcao) {
        case "1": {
          const livros = await this.livroController.listar();
          console.table(livros);
          this.menuLivros();
          break;
        }

        case "2":
          this.rl.question("Digite o ID do livro: ", async (id) => {
            const livro = await this.livroController.buscar(Number(id));

            if (!livro) {
              console.log("Livro não encontrado.");
            } else {
              console.table([livro]);
            }

            this.menuLivros();
          });
          break;

        case "3":
          this.rl.question("Título do livro: ", (titulo) => {
            this.rl.question("Ano de publicação: ", (ano) => {
              this.rl.question("ID do autor: ", async (autorId) => {
                const livro = await this.livroController.criar({
                  id: 0,
                  titulo,
                  ano_publicacao: Number(ano),
                  autor_id: Number(autorId)
                });

                console.log("Livro criado com sucesso:");
                console.table([livro]);

                this.menuLivros();
              });
            });
          });
          break;

        case "4":
          this.rl.question("ID do livro: ", async (id) => {
            const removido = await this.livroController.remover(Number(id));

            if (!removido) {
              console.log("Livro não encontrado.");
            } else {
              console.log("Livro removido com sucesso.");
            }

            this.menuLivros();
          });
          break;

        case "5":
          this.exibir();
          break;

        default:
          console.log("Opção inválida.");
          this.menuLivros();
      }
    });
  }

  private menuClientes(): void {
    console.log("\n=== CLIENTES ===");
    console.log("1. Listar clientes");
    console.log("2. Buscar cliente por ID");
    console.log("3. Criar cliente");
    console.log("4. Remover cliente");
    console.log("5. Voltar");

    this.rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          console.table(this.clienteController.listar());
          this.menuClientes();
          break;

        case "2":
          this.rl.question("Digite o ID do cliente: ", (id) => {
            const cliente = this.clienteController.buscar(Number(id));

            if (cliente) {
              console.table([cliente]);
            } else {
              console.log("Cliente não encontrado.");
            }

            this.menuClientes();
          });
          break;

        case "3":
          this.rl.question("ID do cliente: ", (id) => {
            this.rl.question("Nome do cliente: ", (nome) => {
              this.rl.question("E-mail do cliente: ", (email) => {
                this.rl.question("Telefone do cliente: ", (telefone) => {

                  const cliente = {
                    id: Number(id),
                    nome,
                    email,
                    telefone
                  };

                  const criado = this.clienteController.criar(cliente);

                  console.log("Cliente criado com sucesso:");
                  console.table([criado]);

                  this.menuClientes();
                });
              });
            });
          });
          break;

        case "4":
          this.rl.question("ID do cliente: ", (id) => {
            const removido = this.clienteController.remover(Number(id));

            if (removido) {
              console.log("Cliente removido com sucesso.");
            } else {
              console.log("Cliente não encontrado.");
            }

            this.menuClientes();
          });
          break;

        case "5":
          this.exibir();
          break;

        default:
          console.log("Opção inválida.");
          this.menuClientes();
          break;
      }
    });
  }

  private menuEmprestimos(): void {
    console.log("\n=== EMPRÉSTIMOS ===");
    console.log("1. Listar empréstimos");
    console.log("2. Buscar empréstimo por ID");
    console.log("3. Criar empréstimo");
    console.log("4. Remover empréstimo");
    console.log("5. Registrar devolução");
    console.log("6. Voltar");

    this.rl.question("Escolha uma opção: ", (opcao) => {
      switch (opcao) {
        case "1":
          console.table(this.emprestimoController.listar());
          this.menuEmprestimos();
          break;

        case "2":
          this.rl.question("Digite o ID do empréstimo: ", (id) => {
            const emprestimo = this.emprestimoController.buscar(Number(id));

            if (emprestimo) {
              console.table([emprestimo]);
            } else {
              console.log("Empréstimo não encontrado.");
            }

            this.menuEmprestimos();
          });
          break;

        case "3":
          this.rl.question("ID do empréstimo: ", (id) => {
            this.rl.question("ID do cliente: ", (clienteId) => {
              this.rl.question("ID do livro: ", (livroId) => {
                this.rl.question(
                  "Data do empréstimo (AAAA-MM-DD): ",
                  (dataEmprestimo) => {

                    const emprestimo = {
                      id: Number(id),
                      cliente_id: Number(clienteId),
                      livro_id: Number(livroId),
                      data_emprestimo: new Date(dataEmprestimo)
                    };

                    const criado =
                      this.emprestimoController.criar(emprestimo);

                    console.log("Empréstimo criado com sucesso:");
                    console.table([criado]);

                    this.menuEmprestimos();
                  }
                );
              });
            });
          });
          break;

        case "4":
          this.rl.question("ID do empréstimo: ", (id) => {
            const removido =
              this.emprestimoController.remover(Number(id));

            if (removido) {
              console.log("Empréstimo removido com sucesso.");
            } else {
              console.log("Empréstimo não encontrado.");
            }

            this.menuEmprestimos();
          });
          break;

        case "5":
          this.rl.question("ID da devolução: ", (id) => {
            this.rl.question("ID do empréstimo: ", (emprestimoId) => {
              this.rl.question(
                "Data da devolução (AAAA-MM-DD): ",
                (dataDevolucao) => {

                  const devolucao = {
                    id: Number(id),
                    emprestimo_id: Number(emprestimoId),
                    data_devolucao: dataDevolucao
                  };

                  const criada =
                    this.devolucaoController.criar(devolucao);

                  console.log("Devolução registrada com sucesso:");
                  console.table([criada]);

                  this.menuEmprestimos();
                }
              );
            });
          });
          break;

        case "6":
          this.exibir();
          break;

        default:
          console.log("Opção inválida.");
          this.menuEmprestimos();
          break;
      }
    });
  }
  private async menuRelatorios(): Promise<void> {
    console.log("\n=== RELATÓRIOS ===");
    console.log("1. Livros disponíveis");
    console.log("2. Livros emprestados");
    console.log("3. Livros cadastrados por autor");
    console.log("4. Quantidade de empréstimos por livro");
    console.log("5. Clientes com empréstimos ativos");
    console.log("6. Voltar");

    this.rl.question("Escolha uma opção: ", async (opcao) => {
      switch (opcao) {
        case "1": {
          const livros = await this.livroController.listar();
          const emprestimos = this.emprestimoController.listar();
          const devolucoes = await this.devolucaoRepository.listar();

          const emprestimosAtivos = emprestimos.filter(
            (emprestimo) =>
              !devolucoes.some(
                (devolucao) => devolucao.emprestimo_id === emprestimo.id
              )
          );

          const livrosDisponiveis = livros.filter(
            (livro) =>
              !emprestimosAtivos.some(
                (emprestimo) => emprestimo.livro_id === livro.id
              )
          );

          console.log("\n=== LIVROS DISPONÍVEIS ===");
          console.table(livrosDisponiveis);

          this.menuRelatorios();
          break;
        }

        case "2": {
          const livros = await this.livroController.listar();
          const emprestimos = await this.emprestimoController.listar();
          const devolucoes = await this.devolucaoController.listar();

          const emprestimosAtivos = emprestimos.filter(
            (emprestimo) =>
              !devolucoes.some(
                (devolucao) => devolucao.emprestimo_id === emprestimo.id
              )
          );

          const livrosEmprestados = livros.filter(
            (livro) =>
              emprestimosAtivos.some(
                (emprestimo) => emprestimo.livro_id === livro.id
              )
          );

          console.log("\n=== LIVROS EMPRESTADOS ===");
          console.table(livrosEmprestados);

          this.menuRelatorios();
          break;
        }

        case "3": {
          const autores = await this.autorController.listar();
          const livros = await this.livroController.listar();

          const livrosPorAutor = autores.flatMap((autor) => {
            const livrosDoAutor = livros.filter(
              (livro) => livro.autor_id === autor.id
            );

            return livrosDoAutor.map((livro) => ({
              autor: autor.nome,
              livro: livro.titulo
            }));
          });

          console.log("\n=== LIVROS CADASTRADOS POR AUTOR ===");
          console.table(livrosPorAutor);

          this.menuRelatorios();
          break;
        }

        case "4": {
          const livros = await this.livroController.listar();
          const emprestimos = await this.emprestimoController.listar();

          const quantidadePorLivro = livros.map((livro) => ({
            livro: livro.titulo,
            quantidade_emprestimos: emprestimos.filter(
              (emprestimo) => emprestimo.livro_id === livro.id
            ).length
          }));

          console.log("\n=== QUANTIDADE DE EMPRÉSTIMOS POR LIVRO ===");
          console.table(quantidadePorLivro);

          this.menuRelatorios();
          break;
        }

        case "5": {
          const clientes = await this.clienteController.listar();
          const emprestimos = await this.emprestimoController.listar();
          const devolucoes = await this.devolucaoController.listar();

          const emprestimosAtivos = emprestimos.filter(
            (emprestimo) =>
              !devolucoes.some(
                (devolucao) => devolucao.emprestimo_id === emprestimo.id
              )
          );

          const clientesComEmprestimosAtivos = clientes.filter(
            (cliente) =>
              emprestimosAtivos.some(
                (emprestimo) => emprestimo.cliente_id === cliente.id
              )
          );

          console.log("\n=== CLIENTES COM EMPRÉSTIMOS ATIVOS ===");
          console.table(clientesComEmprestimosAtivos);

          this.menuRelatorios();
          break;
        }

        case "6":
          this.exibir();
          break;

        default:
          console.log("Opção inválida.");
          this.menuRelatorios();
          break;
      }
    });
  }
}

# BookStore Manager CLI

## Descrição do projeto

O BookStore Manager CLI é uma aplicação de linha de comando desenvolvida em Node.js com TypeScript para o gerenciamento de uma livraria.

O sistema permite administrar autores, livros, clientes, empréstimos e devoluções, além de disponibilizar relatórios com base nos dados armazenados em um banco PostgreSQL.

A aplicação foi desenvolvida utilizando arquitetura em camadas, separando as responsabilidades entre Controllers, Services, Repositories, Models, Database, Utils e Menus.

---

## Objetivo

O objetivo do projeto é desenvolver uma aplicação CLI capaz de:

- gerenciar autores, livros, clientes e empréstimos;
- persistir informações em um banco de dados PostgreSQL;
- aplicar regras de negócio durante as operações do sistema;
- realizar consultas relacionais utilizando SQL;
- gerar relatórios a partir dos dados armazenados;
- organizar o código em camadas;
- utilizar recursos do TypeScript, programação orientada a objetos e programação assíncrona.

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- PostgreSQL
- `pg`
- `dotenv`
- `tsx`
- Git
- GitHub

---

## Requisitos para execução

Para executar o projeto, é necessário ter instalado:

- Node.js
- npm
- PostgreSQL
- Git

Também é necessário possuir um banco de dados PostgreSQL configurado e um arquivo `.env` com as informações de conexão.

---

## Configuração do banco de dados

O projeto utiliza PostgreSQL como banco de dados.

A estrutura necessária para execução da aplicação está disponível no arquivo:

```text
src/database/schema.sql
```

Crie o banco de dados no PostgreSQL e execute o conteúdo do arquivo `schema.sql`.

Depois, crie um arquivo `.env` na raiz do projeto com as informações de conexão:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=senha
DB_NAME=bookstore
```

A aplicação utiliza essas variáveis para estabelecer a conexão com o PostgreSQL por meio da biblioteca `pg`.

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/celio3astian/bookstore-manager-cli.git
```

Acesse a pasta do projeto:

```bash
cd bookstore-manager-cli
```

Instale as dependências:

```bash
npm install
```

---

## Execução

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Para compilar o projeto:

```bash
npm run build
```

Ao iniciar a aplicação, o sistema estabelece a conexão com o banco de dados PostgreSQL e apresenta o menu principal no terminal.

Exemplo:

```text
Conexão com o banco de dados realizada com sucesso.

=== BOOKSTORE MANAGER CLI ===
1. Autores
2. Livros
3. Clientes
4. Empréstimos
5. Relatórios
6. Encerrar aplicação

Escolha uma opção:
```

---

## Arquitetura do projeto

O projeto utiliza uma arquitetura em camadas para separar as responsabilidades da aplicação.

### Main

Responsável por iniciar a aplicação, estabelecer a conexão com o banco de dados e iniciar o menu principal.

### Controllers

Responsáveis pela interação entre os menus da aplicação e os serviços.

### Services

Responsáveis pelas regras de negócio, validações e processamento das operações.

### Repositories

Responsáveis pela comunicação com o PostgreSQL e execução das consultas SQL.

### Models

Responsáveis por representar as entidades e tipos utilizados pela aplicação.

### Database

Responsável por centralizar a configuração da conexão com o PostgreSQL e armazenar o script SQL de criação do banco.

### Utils

Responsável por funções auxiliares reutilizáveis.

### Menus

Responsável pela organização e navegação dos menus da aplicação.

O fluxo principal da aplicação segue a estrutura:

```text
Usuário
   |
   v
Menu
   |
   v
Controller
   |
   v
Service
   |
   v
Repository
   |
   v
PostgreSQL
```

---

## Funcionalidades implementadas

### Autores

- cadastrar autores;
- listar autores;
- buscar autor por ID;
- atualizar autores;
- remover autores.

### Livros

- cadastrar livros;
- listar livros;
- buscar livros por ID;
- remover livros;
- vincular livros a autores cadastrados.

### Clientes

- cadastrar clientes;
- listar clientes;
- buscar clientes por ID;
- remover clientes.

### Empréstimos

- cadastrar empréstimos;
- listar empréstimos;
- buscar empréstimos por ID;
- remover empréstimos;
- registrar devoluções.

### Relatórios

O sistema disponibiliza relatórios de:

- livros disponíveis;
- livros emprestados;
- livros cadastrados por autor;
- quantidade de empréstimos por livro;
- clientes com empréstimos ativos.

---

## Estrutura de pastas

```text
bookstore-manager-cli/
├── src/
│   ├── controllers/
│   ├── database/
│   │   ├── connection.ts
│   │   └── schema.sql
│   ├── menus/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── utils/
│   └── main.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

---

## Exemplos de utilização

### Menu principal

Ao executar:

```bash
npm run dev
```

será apresentado:

```text
=== BOOKSTORE MANAGER CLI ===
1. Autores
2. Livros
3. Clientes
4. Empréstimos
5. Relatórios
6. Encerrar aplicação
```

### Gerenciamento de autores

```text
=== AUTORES ===
1. Listar autores
2. Buscar autor por ID
3. Criar autor
4. Atualizar autor
5. Remover autor
6. Voltar
```

### Relatórios

```text
=== RELATÓRIOS ===
1. Livros disponíveis
2. Livros emprestados
3. Livros cadastrados por autor
4. Quantidade de empréstimos por livro
5. Clientes com empréstimos ativos
6. Voltar
```

---

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

O desenvolvimento foi organizado utilizando branches como:

```text
main
develop
feat/autores
feat/livros
feat/clientes
feat/emprestimos
feat/devolucoes
feat/database
feat/menus
feat/modelos
feat/configuracao
docs/readme
```

Os commits foram realizados de forma incremental durante o desenvolvimento do projeto.

---

## Banco de dados

O projeto utiliza PostgreSQL para persistência dos dados.

As operações são realizadas por meio de comandos SQL como:

```sql
INSERT
SELECT
UPDATE
DELETE
```

A comunicação com o PostgreSQL é realizada utilizando a biblioteca `pg`.

---

## Repositório

[GitHub - BookStore Manager CLI](https://github.com/celio3astian/bookstore-manager-cli)

---

## Kanban

As tarefas do projeto foram organizadas utilizando o GitHub Projects.

### Kanban do projeto

[Acessar o Kanban no GitHub Projects](https://github.com/users/celio3astian/projects/4)

---

## Autor

**Célio Bastian**

Projeto desenvolvido como projeto final avaliativo do curso de Back-End com Node.js e TypeScript.
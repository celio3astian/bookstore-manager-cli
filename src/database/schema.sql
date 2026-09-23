CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50)
);

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    ano_publicacao INT,
    autor_id INT NOT NULL,

    CONSTRAINT fk_autor
        FOREIGN KEY (autor_id)
        REFERENCES autores(id)
);

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE emprestimos (
    id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    livro_id INT NOT NULL,
    data_emprestimo DATE DEFAULT CURRENT_DATE,
    data_devolucao DATE,

    CONSTRAINT fk_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes(id),

    CONSTRAINT fk_livro
        FOREIGN KEY (livro_id)
        REFERENCES livros(id)
);
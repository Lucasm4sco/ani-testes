-- Criando banco de dados e realizando conexão ao banco --
CREATE DATABASE ani_verse;

\connect ani_verse;

-- criação da tabela de usuários --

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(60),
    pass TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- criação da tabela para favoritos --

CREATE TABLE fav_list (
    id_user INTEGER NOT NULL,
    id_anime TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(id_user) REFERENCES users(id)
);

-- criação da tabela para assistidos --

CREATE TABLE watcheds_list (
    id_user INTEGER NOT NULL,
    id_anime TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(id_user) REFERENCES users(id)
);

-- criação da tabela para assistir --

CREATE TABLE watch_list (
    id_user INTEGER NOT NULL,
    id_anime TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(id_user) REFERENCES users(id)
);
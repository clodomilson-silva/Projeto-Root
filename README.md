# 📚 Sistema de Cadastro de Alunos - Full Stack# 📚 Sistema de Cadastro de Alunos - API REST



Sistema completo de gerenciamento de cadastro de alunos com backend em Node.js e frontend em React, integrado ao Supabase com PostgreSQL.Backend de uma API REST desenvolvida com Node.js para gerenciamento de cadastro de alunos (CRUD), conectada ao Supabase com PostgreSQL.



## 🚀 Sobre o Projeto## 🚀 Sobre o Projeto



Este é um projeto Full Stack que implementa um sistema de cadastro de alunos (CRUD) com:Este projeto é uma API RESTful para gerenciamento de cadastro de alunos, desenvolvida com Node.js e Express. Atualmente implementa operações CRUD completas e está integrada com o Supabase para armazenamento de dados. O frontend em React será desenvolvido futuramente.

- **Backend**: API REST desenvolvida com Node.js, Express e PostgreSQL

- **Frontend**: Interface moderna desenvolvida com React e Vite## 🛠️ Tecnologias Utilizadas

- **Banco de Dados**: PostgreSQL hospedado no Supabase

### Backend

## 🛠️ Tecnologias Utilizadas- **Node.js** - Ambiente de execução JavaScript

- **Express** - Framework web para Node.js

### Backend- **PostgreSQL** - Banco de dados relacional

- **Node.js** - Ambiente de execução JavaScript- **Supabase** - Plataforma de backend como serviço (BaaS)

- **Express** - Framework web para Node.js- **Sequelize** - ORM para Node.js

- **PostgreSQL** - Banco de dados relacional- **dotenv** - Gerenciamento de variáveis de ambiente

- **Supabase** - Plataforma de backend como serviço (BaaS)- **pg** - Driver PostgreSQL para Node.js

- **Sequelize** - ORM para Node.js

- **dotenv** - Gerenciamento de variáveis de ambiente### Ferramentas de Desenvolvimento

- **pg** - Driver PostgreSQL para Node.js- **Nodemon** - Reinicialização automática do servidor

- **Thunder Client / Postman** - Testes de API

### Frontend

- **React** - Biblioteca JavaScript para interfaces## 📋 Pré-requisitos

- **Vite** - Build tool e dev server

- **Axios** - Cliente HTTP para requisiçõesAntes de começar, você precisará ter instalado em sua máquina:

- **ESLint** - Linter para qualidade de código

- [Node.js](https://nodejs.org/) (v14 ou superior)

### Ferramentas de Desenvolvimento- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

- **Nodemon** - Reinicialização automática do servidor- Conta no [Supabase](https://supabase.com/)

- **Concurrently** - Execução simultânea de scripts

- **Thunder Client / Postman** - Testes de API## 🔧 Instalação



## 📋 Pré-requisitos1. Clone este repositório:

```bash

Antes de começar, você precisará ter instalado em sua máquina:git clone git@github.com:clodomilson-silva/Projeto-Root.git

cd Projeto-Root

- [Node.js](https://nodejs.org/) (v14 ou superior)```

- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

- Conta no [Supabase](https://supabase.com/)2. Instale as dependências:

```bash

## 🔧 Instalaçãonpm install

```

1. Clone este repositório:

```bash3. Configure as variáveis de ambiente:

git clone git@github.com:clodomilson-silva/Projeto-Root.git

cd Projeto-RootCrie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```

```env

2. Instale as dependências de todos os projetos:PORT=3000

```bash

npm run install:all# Supabase Configuration

```SUPABASE_URL=sua_url_do_supabase

SUPABASE_KEY=sua_chave_do_supabase

Ou instale manualmente:

```bash# PostgreSQL Direct Connection (Supabase)

# Dependências da raizPGHOST=db.seu_projeto.supabase.co

npm installPGUSER=postgres

PGPASSWORD=sua_senha_do_supabase

# Dependências do backendPGDATABASE=postgres

cd backend && npm installPGPORT=5432

```

# Dependências do frontend

cd ../frontend && npm install4. Configure o banco de dados no Supabase:

```

Execute o seguinte SQL no SQL Editor do Supabase:

3. Configure as variáveis de ambiente do backend:

```sql

Crie um arquivo `.env` na pasta `backend/` com as seguintes variáveis:CREATE TABLE IF NOT EXISTS items (

    id BIGSERIAL PRIMARY KEY,

```env    name TEXT NOT NULL,

PORT=3000    description TEXT,

    price NUMERIC(10,2),

# Supabase Configuration    created_at TIMESTAMP DEFAULT now()

SUPABASE_URL=sua_url_do_supabase);

SUPABASE_KEY=sua_chave_do_supabase

-- Habilitar Row Level Security (RLS)

# PostgreSQL Direct Connection (Supabase)ALTER TABLE items ENABLE ROW LEVEL SECURITY;

PGHOST=db.seu_projeto.supabase.co

PGUSER=postgres-- Criar política para permitir todas as operações

PGPASSWORD=sua_senha_do_supabaseCREATE POLICY "Enable all operations for all users" ON items

PGDATABASE=postgresFOR ALL

PGPORT=5432USING (true)

```WITH CHECK (true);

```

4. Configure o banco de dados no Supabase:

## 🚀 Como Executar

Execute o seguinte SQL no SQL Editor do Supabase:

### Modo de Desenvolvimento

```sql```bash

CREATE TABLE IF NOT EXISTS items (npm run dev

    id BIGSERIAL PRIMARY KEY,```

    name TEXT NOT NULL,

    description TEXT,### Modo de Produção

    price NUMERIC(10,2),```bash

    created_at TIMESTAMP DEFAULT now()npm start

);```



-- Habilitar Row Level Security (RLS)O servidor estará rodando em `http://localhost:3000`

ALTER TABLE items ENABLE ROW LEVEL SECURITY;

## 📍 Endpoints da API

-- Criar política para permitir todas as operações

CREATE POLICY "Enable all operations for all users" ON items### Base URL

FOR ALL```

USING (true)http://localhost:3000/api

WITH CHECK (true);```

```

### Rotas Disponíveis

## 🚀 Como Executar

| Método | Endpoint | Descrição |

### Modo de Desenvolvimento (Recomendado)|--------|----------|-----------|

| GET | `/api/items` | Lista todos os itens |

Execute ambos os servidores simultaneamente:| GET | `/api/items/:id` | Busca um item por ID |

```bash| POST | `/api/items` | Cria um novo item |

npm run dev| PUT | `/api/items/:id` | Atualiza um item existente |

```| DELETE | `/api/items/:id` | Remove um item |



Este comando inicia:### Exemplos de Requisições

- Backend em `http://localhost:3000`

- Frontend em `http://localhost:5173`#### GET - Listar todos os itens

```bash

### Executar Separadamentecurl http://localhost:3000/api/items

```

**Backend apenas:**

```bash#### POST - Criar novo item

npm run dev:backend```bash

```curl -X POST http://localhost:3000/api/items \

  -H "Content-Type: application/json" \

**Frontend apenas:**  -d '{

```bash    "name": "João Silva",

npm run dev:frontend    "description": "Aluno do curso de Engenharia",

```    "price": 1500.00

  }'

### Modo de Produção```



```bash#### PUT - Atualizar item

npm start```bash

```curl -X PUT http://localhost:3000/api/items/1 \

  -H "Content-Type: application/json" \

## 📁 Estrutura do Projeto  -d '{

    "name": "João Silva Atualizado",

```    "description": "Aluno do curso de Engenharia de Software",

Projeto-Root/    "price": 1600.00

├── backend/                 # API REST (Node.js + Express)  }'

│   ├── migrations/          # Scripts de migração do banco de dados```

│   ├── models/              # Models do Sequelize

│   ├── src/#### DELETE - Remover item

│   │   ├── controllers/     # Controladores da aplicação```bash

│   │   ├── db/              # Configurações de banco de dadoscurl -X DELETE http://localhost:3000/api/items/1

│   │   ├── routes/          # Definição das rotas```

│   │   └── server.js        # Arquivo principal do servidor

│   ├── .env                 # Variáveis de ambiente (não versionado)## 📁 Estrutura do Projeto

│   └── package.json

│```

├── frontend/                # Interface Reactproject-root/

│   ├── public/              # Arquivos estáticos├── migrations/              # Scripts de migração do banco de dados

│   ├── src/│   └── create_items_table.sql

│   │   ├── components/      # Componentes React├── src/

│   │   ├── App.jsx          # Componente principal│   ├── controllers/         # Controladores da aplicação

│   │   └── main.jsx         # Ponto de entrada│   │   ├── itemsController.js

│   ├── index.html│   │   └── itemsControllerSupabase.js

│   ├── vite.config.js       # Configuração do Vite│   ├── db/                  # Configurações de banco de dados

│   └── package.json│   │   ├── index.js

││   │   └── supabase.js

├── .gitignore│   ├── routes/              # Definição das rotas

├── package.json             # Scripts do projeto raiz│   │   └── itemsRoutes.js

└── README.md                # Este arquivo│   ├── testDb.js            # Script de teste de conexão

```│   ├── testInsert.js        # Script de teste de inserção

│   ├── testSupabase.js      # Script de teste do Supabase

## 📍 Endpoints da API│   └── server.js            # Arquivo principal do servidor

├── .env                     # Variáveis de ambiente (não versionado)

### Base URL├── .gitignore              # Arquivos ignorados pelo git

```├── package.json            # Dependências e scripts

http://localhost:3000/api└── README.md               # Documentação do projeto

``````



### Rotas Disponíveis## 🧪 Testes



| Método | Endpoint | Descrição |Para testar a conexão com o banco de dados:

|--------|----------|-----------|

| GET | `/api/items` | Lista todos os itens |```bash

| GET | `/api/items/:id` | Busca um item por ID |# Testar conexão PostgreSQL

| POST | `/api/items` | Cria um novo item |node src/testDb.js

| PUT | `/api/items/:id` | Atualiza um item existente |

| DELETE | `/api/items/:id` | Remove um item |# Testar conexão Supabase

node src/testSupabase.js

### Exemplos de Requisições

# Testar inserção de dados

#### GET - Listar todos os itensnode src/testInsert.js

```bash```

curl http://localhost:3000/api/items

```## 🔐 Segurança



#### POST - Criar novo item- As credenciais sensíveis estão armazenadas no arquivo `.env` que não é versionado

```bash- O Supabase Row Level Security (RLS) está habilitado para controle de acesso

curl -X POST http://localhost:3000/api/items \- CORS configurado para permitir requisições de diferentes origens

  -H "Content-Type: application/json" \

  -d '{## 🚧 Roadmap

    "name": "João Silva",

    "description": "Aluno do curso de Engenharia",- [x] Configuração inicial do projeto

    "price": 1500.00- [x] Implementação da API REST com CRUD completo

  }'- [x] Integração com Supabase/PostgreSQL

```- [x] Tratamento de erros e validações

- [ ] Implementação de autenticação e autorização

## 🧪 Testes- [ ] Migração completa para Sequelize ORM

- [ ] Testes unitários e de integração

Para testar a conexão com o banco de dados:- [ ] Frontend em React

- [ ] Deploy em produção

```bash

# Testar conexão PostgreSQL## 🤝 Contribuindo

cd backend && node src/testDb.js

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

# Testar conexão Supabase

cd backend && node src/testSupabase.js## 📝 Licença

```

Este projeto está sob a licença ISC.

## 📜 Scripts Disponíveis

## 👨‍💻 Autor

Na raiz do projeto:

**Clodomilson Silva**

- `npm run dev` - Inicia backend e frontend simultaneamente (desenvolvimento)

- `npm run dev:backend` - Inicia apenas o backend- GitHub: [@clodomilson-silva](https://github.com/clodomilson-silva)

- `npm run dev:frontend` - Inicia apenas o frontend

- `npm start` - Inicia ambos em modo produção---

- `npm run install:all` - Instala todas as dependências

- `npm run build:frontend` - Build do frontend para produção⌨️ Desenvolvido com ❤️ por Clodomilson Silva


## 🔐 Segurança

- As credenciais sensíveis estão armazenadas no arquivo `.env` que não é versionado
- O Supabase Row Level Security (RLS) está habilitado para controle de acesso
- CORS configurado para permitir requisições de diferentes origens

## 🚧 Roadmap

- [x] Configuração inicial do projeto
- [x] Implementação da API REST com CRUD completo
- [x] Integração com Supabase/PostgreSQL
- [x] Tratamento de erros e validações
- [x] Frontend em React com Vite
- [x] Interface para CRUD de items
- [x] Configuração para rodar ambos os servidores simultaneamente
- [ ] Implementação de autenticação e autorização
- [ ] Testes unitários e de integração
- [ ] Deploy em produção
- [ ] Docker e Docker Compose
- [ ] CI/CD com GitHub Actions

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Clodomilson Silva**

- GitHub: [@clodomilson-silva](https://github.com/clodomilson-silva)

---

⌨️ Desenvolvido com ❤️ por Clodomilson Silva

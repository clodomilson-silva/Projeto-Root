# 📦 Sistema de Gerenciamento de Items - Full Stack# 📚 Sistema de Cadastro de Alunos - Full Stack# 📚 Sistema de Cadastro de Alunos - API REST



Sistema completo de gerenciamento de items (CRUD) com backend em Node.js e frontend em React, integrado ao Supabase com PostgreSQL.



## 🚀 Sobre o ProjetoSistema completo de gerenciamento de cadastro de alunos com backend em Node.js e frontend em React, integrado ao Supabase com PostgreSQL.Backend de uma API REST desenvolvida com Node.js para gerenciamento de cadastro de alunos (CRUD), conectada ao Supabase com PostgreSQL.



Este é um projeto Full Stack que implementa um sistema de cadastro e gerenciamento de items com operações CRUD completas:

- **Backend**: API REST desenvolvida com Node.js, Express e PostgreSQL

- **Frontend**: Interface moderna desenvolvida com React e Vite## 🚀 Sobre o Projeto## 🚀 Sobre o Projeto

- **Banco de Dados**: PostgreSQL hospedado no Supabase



O projeto está sendo desenvolvido de forma incremental e será aprimorado futuramente com mais funcionalidades e regras de negócio específicas.

Este é um projeto Full Stack que implementa um sistema de cadastro de alunos (CRUD) com:Este projeto é uma API RESTful para gerenciamento de cadastro de alunos, desenvolvida com Node.js e Express. Atualmente implementa operações CRUD completas e está integrada com o Supabase para armazenamento de dados. O frontend em React será desenvolvido futuramente.

## 🛠️ Tecnologias Utilizadas

- **Backend**: API REST desenvolvida com Node.js, Express e PostgreSQL

### Backend

- **Node.js** - Ambiente de execução JavaScript- **Frontend**: Interface moderna desenvolvida com React e Vite## 🛠️ Tecnologias Utilizadas

- **Express** - Framework web para Node.js

- **PostgreSQL** - Banco de dados relacional- **Banco de Dados**: PostgreSQL hospedado no Supabase

- **Supabase** - Plataforma de backend como serviço (BaaS)

- **Sequelize** - ORM para Node.js### Backend

- **dotenv** - Gerenciamento de variáveis de ambiente

- **pg** - Driver PostgreSQL para Node.js## 🛠️ Tecnologias Utilizadas- **Node.js** - Ambiente de execução JavaScript



### Frontend- **Express** - Framework web para Node.js

- **React** - Biblioteca JavaScript para interfaces

- **Vite** - Build tool e dev server### Backend- **PostgreSQL** - Banco de dados relacional

- **Axios** - Cliente HTTP para requisições

- **ESLint** - Linter para qualidade de código- **Node.js** - Ambiente de execução JavaScript- **Supabase** - Plataforma de backend como serviço (BaaS)



### Ferramentas de Desenvolvimento- **Express** - Framework web para Node.js- **Sequelize** - ORM para Node.js

- **Nodemon** - Reinicialização automática do servidor

- **Concurrently** - Execução simultânea de scripts- **PostgreSQL** - Banco de dados relacional- **dotenv** - Gerenciamento de variáveis de ambiente

- **Thunder Client / Postman** - Testes de API

- **Supabase** - Plataforma de backend como serviço (BaaS)- **pg** - Driver PostgreSQL para Node.js

## 📋 Pré-requisitos

- **Sequelize** - ORM para Node.js

Antes de começar, você precisará ter instalado em sua máquina:

- **dotenv** - Gerenciamento de variáveis de ambiente### Ferramentas de Desenvolvimento

- [Node.js](https://nodejs.org/) (v14 ou superior)

- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)- **pg** - Driver PostgreSQL para Node.js- **Nodemon** - Reinicialização automática do servidor

- Conta no [Supabase](https://supabase.com/)

- **Thunder Client / Postman** - Testes de API

## 🔧 Instalação

### Frontend

1. Clone este repositório:

```bash- **React** - Biblioteca JavaScript para interfaces## 📋 Pré-requisitos

git clone git@github.com:clodomilson-silva/Projeto-Root.git

cd Projeto-Root- **Vite** - Build tool e dev server

```

- **Axios** - Cliente HTTP para requisiçõesAntes de começar, você precisará ter instalado em sua máquina:

2. Instale as dependências de todos os projetos:

```bash- **ESLint** - Linter para qualidade de código

npm run install:all

```- [Node.js](https://nodejs.org/) (v14 ou superior)



Ou instale manualmente:### Ferramentas de Desenvolvimento- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

```bash

# Dependências da raiz- **Nodemon** - Reinicialização automática do servidor- Conta no [Supabase](https://supabase.com/)

npm install

- **Concurrently** - Execução simultânea de scripts

# Dependências do backend

cd backend && npm install- **Thunder Client / Postman** - Testes de API## 🔧 Instalação



# Dependências do frontend

cd ../frontend && npm install

```## 📋 Pré-requisitos1. Clone este repositório:



3. Configure as variáveis de ambiente do backend:```bash



Crie um arquivo `.env` na pasta `backend/` com as seguintes variáveis:Antes de começar, você precisará ter instalado em sua máquina:git clone git@github.com:clodomilson-silva/Projeto-Root.git



```envcd Projeto-Root

PORT=3000

- [Node.js](https://nodejs.org/) (v14 ou superior)```

# Supabase Configuration

SUPABASE_URL=sua_url_do_supabase- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

SUPABASE_KEY=sua_chave_do_supabase

- Conta no [Supabase](https://supabase.com/)2. Instale as dependências:

# PostgreSQL Direct Connection (Supabase)

PGHOST=db.seu_projeto.supabase.co```bash

PGUSER=postgres

PGPASSWORD=sua_senha_do_supabase## 🔧 Instalaçãonpm install

PGDATABASE=postgres

PGPORT=5432```

```

1. Clone este repositório:

4. Configure o banco de dados no Supabase:

```bash3. Configure as variáveis de ambiente:

Execute o seguinte SQL no SQL Editor do Supabase:

git clone git@github.com:clodomilson-silva/Projeto-Root.git

```sql

CREATE TABLE IF NOT EXISTS items (cd Projeto-RootCrie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    id BIGSERIAL PRIMARY KEY,

    name TEXT NOT NULL,```

    description TEXT,

    price NUMERIC(10,2),```env

    created_at TIMESTAMP DEFAULT now()

);2. Instale as dependências de todos os projetos:PORT=3000



-- Habilitar Row Level Security (RLS)```bash

ALTER TABLE items ENABLE ROW LEVEL SECURITY;

npm run install:all# Supabase Configuration

-- Criar política para permitir todas as operações

CREATE POLICY "Enable all operations for all users" ON items```SUPABASE_URL=sua_url_do_supabase

FOR ALL

USING (true)SUPABASE_KEY=sua_chave_do_supabase

WITH CHECK (true);

```Ou instale manualmente:



## 🚀 Como Executar```bash# PostgreSQL Direct Connection (Supabase)



### Modo de Desenvolvimento (Recomendado)# Dependências da raizPGHOST=db.seu_projeto.supabase.co



Execute ambos os servidores simultaneamente:npm installPGUSER=postgres

```bash

npm run devPGPASSWORD=sua_senha_do_supabase

```

# Dependências do backendPGDATABASE=postgres

Este comando inicia:

- Backend em `http://localhost:3000`cd backend && npm installPGPORT=5432

- Frontend em `http://localhost:5173`

```

### Executar Separadamente

# Dependências do frontend

**Backend apenas:**

```bashcd ../frontend && npm install4. Configure o banco de dados no Supabase:

npm run dev:backend

``````



**Frontend apenas:**Execute o seguinte SQL no SQL Editor do Supabase:

```bash

npm run dev:frontend3. Configure as variáveis de ambiente do backend:

```

```sql

### Modo de Produção

Crie um arquivo `.env` na pasta `backend/` com as seguintes variáveis:CREATE TABLE IF NOT EXISTS items (

```bash

npm start    id BIGSERIAL PRIMARY KEY,

```

```env    name TEXT NOT NULL,

## 📁 Estrutura do Projeto

PORT=3000    description TEXT,

```

Projeto-Root/    price NUMERIC(10,2),

├── backend/                 # API REST (Node.js + Express)

│   ├── migrations/          # Scripts de migração do banco de dados# Supabase Configuration    created_at TIMESTAMP DEFAULT now()

│   ├── models/              # Models do Sequelize

│   ├── src/SUPABASE_URL=sua_url_do_supabase);

│   │   ├── controllers/     # Controladores da aplicação

│   │   ├── db/              # Configurações de banco de dadosSUPABASE_KEY=sua_chave_do_supabase

│   │   ├── routes/          # Definição das rotas

│   │   └── server.js        # Arquivo principal do servidor-- Habilitar Row Level Security (RLS)

│   ├── .env                 # Variáveis de ambiente (não versionado)

│   └── package.json# PostgreSQL Direct Connection (Supabase)ALTER TABLE items ENABLE ROW LEVEL SECURITY;

│

├── frontend/                # Interface ReactPGHOST=db.seu_projeto.supabase.co

│   ├── public/              # Arquivos estáticos

│   ├── src/PGUSER=postgres-- Criar política para permitir todas as operações

│   │   ├── components/      # Componentes React

│   │   ├── pages/           # Páginas da aplicaçãoPGPASSWORD=sua_senha_do_supabaseCREATE POLICY "Enable all operations for all users" ON items

│   │   ├── services/        # Serviços de integração com API

│   │   ├── App.jsx          # Componente principalPGDATABASE=postgresFOR ALL

│   │   └── main.jsx         # Ponto de entrada

│   ├── index.htmlPGPORT=5432USING (true)

│   ├── vite.config.js       # Configuração do Vite

│   └── package.json```WITH CHECK (true);

│

├── .gitignore```

├── package.json             # Scripts do projeto raiz

└── README.md                # Este arquivo4. Configure o banco de dados no Supabase:

```

## 🚀 Como Executar

## 📍 Endpoints da API

Execute o seguinte SQL no SQL Editor do Supabase:

### Base URL

```### Modo de Desenvolvimento

http://localhost:3000/api

``````sql```bash



### Rotas DisponíveisCREATE TABLE IF NOT EXISTS items (npm run dev



| Método | Endpoint | Descrição |    id BIGSERIAL PRIMARY KEY,```

|--------|----------|-----------|

| GET | `/api/items` | Lista todos os itens |    name TEXT NOT NULL,

| GET | `/api/items/:id` | Busca um item por ID |

| POST | `/api/items` | Cria um novo item |    description TEXT,### Modo de Produção

| PUT | `/api/items/:id` | Atualiza um item existente |

| DELETE | `/api/items/:id` | Remove um item |    price NUMERIC(10,2),```bash



### Exemplos de Requisições    created_at TIMESTAMP DEFAULT now()npm start



#### GET - Listar todos os itens);```

```bash

curl http://localhost:3000/api/items

```

-- Habilitar Row Level Security (RLS)O servidor estará rodando em `http://localhost:3000`

#### POST - Criar novo item

```bashALTER TABLE items ENABLE ROW LEVEL SECURITY;

curl -X POST http://localhost:3000/api/items \

  -H "Content-Type: application/json" \## 📍 Endpoints da API

  -d '{

    "name": "Notebook Dell",-- Criar política para permitir todas as operações

    "description": "Notebook para desenvolvimento",

    "price": 3500.00CREATE POLICY "Enable all operations for all users" ON items### Base URL

  }'

```FOR ALL```



#### PUT - Atualizar itemUSING (true)http://localhost:3000/api

```bash

curl -X PUT http://localhost:3000/api/items/1 \WITH CHECK (true);```

  -H "Content-Type: application/json" \

  -d '{```

    "name": "Notebook Dell XPS",

    "description": "Notebook para desenvolvimento atualizado",### Rotas Disponíveis

    "price": 4000.00

  }'## 🚀 Como Executar

```

| Método | Endpoint | Descrição |

#### DELETE - Remover item

```bash### Modo de Desenvolvimento (Recomendado)|--------|----------|-----------|

curl -X DELETE http://localhost:3000/api/items/1

```| GET | `/api/items` | Lista todos os itens |



## 🧪 TestesExecute ambos os servidores simultaneamente:| GET | `/api/items/:id` | Busca um item por ID |



Para testar a conexão com o banco de dados:```bash| POST | `/api/items` | Cria um novo item |



```bashnpm run dev| PUT | `/api/items/:id` | Atualiza um item existente |

# Testar conexão PostgreSQL

cd backend && node src/testDb.js```| DELETE | `/api/items/:id` | Remove um item |



# Testar conexão Supabase

cd backend && node src/testSupabase.js

Este comando inicia:### Exemplos de Requisições

# Testar inserção de dados

cd backend && node src/testInsert.js- Backend em `http://localhost:3000`

```

- Frontend em `http://localhost:5173`#### GET - Listar todos os itens

## 📜 Scripts Disponíveis

```bash

Na raiz do projeto:

### Executar Separadamentecurl http://localhost:3000/api/items

- `npm run dev` - Inicia backend e frontend simultaneamente (desenvolvimento)

- `npm run dev:backend` - Inicia apenas o backend```

- `npm run dev:frontend` - Inicia apenas o frontend

- `npm start` - Inicia ambos em modo produção**Backend apenas:**

- `npm run install:all` - Instala todas as dependências

- `npm run build:frontend` - Build do frontend para produção```bash#### POST - Criar novo item



## 🔐 Segurançanpm run dev:backend```bash



- As credenciais sensíveis estão armazenadas no arquivo `.env` que não é versionado```curl -X POST http://localhost:3000/api/items \

- O Supabase Row Level Security (RLS) está habilitado para controle de acesso

- CORS configurado para permitir requisições de diferentes origens  -H "Content-Type: application/json" \



## 🚧 Roadmap**Frontend apenas:**  -d '{



- [x] Configuração inicial do projeto```bash    "name": "João Silva",

- [x] Implementação da API REST com CRUD completo

- [x] Integração com Supabase/PostgreSQLnpm run dev:frontend    "description": "Aluno do curso de Engenharia",

- [x] Tratamento de erros e validações

- [x] Frontend em React com Vite```    "price": 1500.00

- [x] Interface para CRUD de items

- [x] Configuração para rodar ambos os servidores simultaneamente  }'

- [ ] Implementação de autenticação e autorização

- [ ] Adicionar mais funcionalidades e regras de negócio### Modo de Produção```

- [ ] Testes unitários e de integração

- [ ] Validações avançadas de formulários

- [ ] Paginação e filtros de busca

- [ ] Deploy em produção```bash#### PUT - Atualizar item

- [ ] Docker e Docker Compose

- [ ] CI/CD com GitHub Actionsnpm start```bash



## 🤝 Contribuindo```curl -X PUT http://localhost:3000/api/items/1 \



Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.  -H "Content-Type: application/json" \



## 📝 Licença## 📁 Estrutura do Projeto  -d '{



Este projeto está sob a licença ISC.    "name": "João Silva Atualizado",



## 👨‍💻 Autor```    "description": "Aluno do curso de Engenharia de Software",



**Clodomilson Silva**Projeto-Root/    "price": 1600.00



- GitHub: [@clodomilson-silva](https://github.com/clodomilson-silva)├── backend/                 # API REST (Node.js + Express)  }'



---│   ├── migrations/          # Scripts de migração do banco de dados```



⌨️ Desenvolvido com ❤️ por Clodomilson Silva│   ├── models/              # Models do Sequelize


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

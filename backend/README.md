# 📚 Sistema de Cadastro de Alunos - API REST

Backend de uma API REST desenvolvida com Node.js para gerenciamento de cadastro de alunos (CRUD), conectada ao Supabase com PostgreSQL.

## 🚀 Sobre o Projeto

Este projeto é uma API RESTful para gerenciamento de cadastro de alunos, desenvolvida com Node.js e Express. Atualmente implementa operações CRUD completas e está integrada com o Supabase para armazenamento de dados. O frontend em React será desenvolvido futuramente.

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **PostgreSQL** - Banco de dados relacional
- **Supabase** - Plataforma de backend como serviço (BaaS)
- **Sequelize** - ORM para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente
- **pg** - Driver PostgreSQL para Node.js

### Ferramentas de Desenvolvimento
- **Nodemon** - Reinicialização automática do servidor
- **Thunder Client / Postman** - Testes de API

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Supabase](https://supabase.com/)

## 🔧 Instalação

1. Clone este repositório:
```bash
git clone git@github.com:clodomilson-silva/Projeto-Root.git
cd Projeto-Root
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000

# Supabase Configuration
SUPABASE_URL=sua_url_do_supabase
SUPABASE_KEY=sua_chave_do_supabase

# PostgreSQL Direct Connection (Supabase)
PGHOST=db.seu_projeto.supabase.co
PGUSER=postgres
PGPASSWORD=sua_senha_do_supabase
PGDATABASE=postgres
PGPORT=5432
```

4. Configure o banco de dados no Supabase:

Execute o seguinte SQL no SQL Editor do Supabase:

```sql
CREATE TABLE IF NOT EXISTS items (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10,2),
    created_at TIMESTAMP DEFAULT now()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir todas as operações
CREATE POLICY "Enable all operations for all users" ON items
FOR ALL
USING (true)
WITH CHECK (true);
```

## 🚀 Como Executar

### Modo de Desenvolvimento
```bash
npm run dev
```

### Modo de Produção
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 📍 Endpoints da API

### Base URL
```
http://localhost:3000/api
```

### Rotas Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/items` | Lista todos os itens |
| GET | `/api/items/:id` | Busca um item por ID |
| POST | `/api/items` | Cria um novo item |
| PUT | `/api/items/:id` | Atualiza um item existente |
| DELETE | `/api/items/:id` | Remove um item |

### Exemplos de Requisições

#### GET - Listar todos os itens
```bash
curl http://localhost:3000/api/items
```

#### POST - Criar novo item
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "description": "Aluno do curso de Engenharia",
    "price": 1500.00
  }'
```

#### PUT - Atualizar item
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva Atualizado",
    "description": "Aluno do curso de Engenharia de Software",
    "price": 1600.00
  }'
```

#### DELETE - Remover item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## 📁 Estrutura do Projeto

```
project-root/
├── migrations/              # Scripts de migração do banco de dados
│   └── create_items_table.sql
├── src/
│   ├── controllers/         # Controladores da aplicação
│   │   ├── itemsController.js
│   │   └── itemsControllerSupabase.js
│   ├── db/                  # Configurações de banco de dados
│   │   ├── index.js
│   │   └── supabase.js
│   ├── routes/              # Definição das rotas
│   │   └── itemsRoutes.js
│   ├── testDb.js            # Script de teste de conexão
│   ├── testInsert.js        # Script de teste de inserção
│   ├── testSupabase.js      # Script de teste do Supabase
│   └── server.js            # Arquivo principal do servidor
├── .env                     # Variáveis de ambiente (não versionado)
├── .gitignore              # Arquivos ignorados pelo git
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
```

## 🧪 Testes

Para testar a conexão com o banco de dados:

```bash
# Testar conexão PostgreSQL
node src/testDb.js

# Testar conexão Supabase
node src/testSupabase.js

# Testar inserção de dados
node src/testInsert.js
```

## 🔐 Segurança

- As credenciais sensíveis estão armazenadas no arquivo `.env` que não é versionado
- O Supabase Row Level Security (RLS) está habilitado para controle de acesso
- CORS configurado para permitir requisições de diferentes origens

## 🚧 Roadmap

- [x] Configuração inicial do projeto
- [x] Implementação da API REST com CRUD completo
- [x] Integração com Supabase/PostgreSQL
- [x] Tratamento de erros e validações
- [ ] Implementação de autenticação e autorização
- [ ] Migração completa para Sequelize ORM
- [ ] Testes unitários e de integração
- [ ] Frontend em React
- [ ] Deploy em produção

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Clodomilson Silva**

- GitHub: [@clodomilson-silva](https://github.com/clodomilson-silva)

---

⌨️ Desenvolvido com ❤️ por Clodomilson Silva

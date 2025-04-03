# API de Vídeos com Fastify e PostgreSQL (Neon)

## Descrição
API simples para gerenciamento de vídeos, construída com Node.js, Fastify e PostgreSQL no serviço Neon. Permite CRUD completo de vídeos com busca.

## Pré-requisitos
- Node.js 18+
- Conta no [Neon](https://neon.tech/)
- VS Code com extensão REST Client (para testar as rotas)

## Configuração

1. Clone o repositório:
```bash
git clone [seu-repositorio]
cd [pasta-do-projeto]
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz com:
```env
DATABASE_URL=sua_url_de_conexao_do_neon
```

4. Execute o servidor:
```bash
npm run dev
```

## Testando a API

Use o arquivo `routes.http` (com a extensão REST Client) para testar:

```http
### Criar vídeo
POST http://localhost:3333/videos
Content-Type: application/json

{
    "title": "Video node",
    "description": "Esse é o vídeo 01",
    "duration": 100
}

### Listar todos os vídeos
GET http://localhost:3333/videos

### Buscar vídeos
GET http://localhost:3333/videos?search=node

### Atualizar vídeo
PUT http://localhost:3333/videos/ID_DO_VIDEO
Content-Type: application/json

{
    "title": "Video alterado",
    "description": "Esse é o vídeo alterado",
    "duration": 100
}

### Deletar vídeo
DELETE http://localhost:3333/videos/ID_DO_VIDEO
```

## Rotas

- `POST /videos` - Cria novo vídeo
- `GET /videos` - Lista todos os vídeos
- `GET /videos?search=termo` - Busca vídeos por termo
- `PUT /videos/:id` - Atualiza vídeo
- `DELETE /videos/:id` - Remove vídeo

## Estrutura do Vídeo
```json
{
    "id": "uuid",
    "title": "string",
    "description": "string",
    "duration": number
}
```

## Tecnologias
- Fastify - Framework web rápido
- PostgreSQL - Banco de dados
- Neon - Serviço de PostgreSQL serverless
- Dotenv - Gerenciamento de variáveis de ambiente

## Licença
MIT

# English Vocabulary Test

Este projeto possui dois principais componentes: **backend** (NestJS) e **frontend** (Next.js). Você pode iniciar ambos utilizando Docker Compose ou rodando manualmente em sua máquina.

---

## Usando Docker Compose

> **Pré-requisitos:**  
> - [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/) instalados.

1. Na raiz do projeto, execute:
   ```sh
   docker-compose up --build
   ```
2. O backend estará disponível em [http://localhost:3001](http://localhost:3001)  
   O frontend estará disponível em [http://localhost:3000](http://localhost:3000)

---

## Iniciando Manualmente (Sem Docker Compose)

### 1. Banco de Dados

- Certifique-se de ter o **PostgreSQL** rodando localmente.
- Crie um banco chamado `vocab_learn_track` com usuário e senha `postgres`.

### 2. Backend

1. Acesse a pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Copie `.env.example` para `.env` e ajuste se necessário.
4. Execute as migrações do banco:
   ```sh
   npx prisma migrate deploy
   ```
5. Inicie o servidor:
   ```sh
   npm run start:dev
   ```
6. O backend estará disponível em [http://localhost:3001](http://localhost:3001)

### 3. Frontend

1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Copie `.env.example` para `.env` e ajuste se necessário.
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
5. O frontend estará disponível em [http://localhost:3000](http://localhost:3000)

---

## Observações

- Certifique-se de que as URLs de API no frontend estejam apontando para o endereço correto do backend.
- Para parar os containers Docker, use `docker-compose
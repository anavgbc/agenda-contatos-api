# Agenda de contatos - API

Aplicação para gerenciamento de contatos de um usuário, possibilitando criar, editar, remover e visualizar um contato.

## Índice:

- [Agenda de contatos - API](#agenda-de-contatos---api)
  - [Índice:](#índice)
  - [1. **Tecnologias utilizadas**](#1-tecnologias-utilizadas)
  - [2. Instalação](#2-instalação)
  - [3. Endpoints](#3-endpoints)
    - [3.1.1. Criação de usuários](#311-criação-de-usuários)
    - [3.1.2. Listagem de usuário](#312-listagem-de-usuário)
    - [3.1.3. Listagem de usuários](#313-listagem-de-usuários)
    - [3.1.4. Edição de um usuário](#314-edição-de-um-usuário)
    - [3.1.5. Deletar um usuário](#315-deletar-um-usuário)
    - [3.2.1. Criação de um contato](#321-criação-de-um-contato)
    - [3.2.2. Edição de um contato](#322-edição-de-um-contato)
    - [3.2.3. Listagem de um contato](#323-listagem-de-um-contato)
    - [3.2.4. Deleção de um contato](#324-deleção-de-um-contato)
    - [3.3.1. Login](#331-login)

## 1. **Tecnologias utilizadas**

- Typescript
- Express
- Node.Js
- TypeORM
- jsonwebtoken
- PostgreSQL
- bcrypt

## 2. Instalação

- Clone o repositório pela chave SSH.

  ```
  git@github.com:anavgbc/agenda-contatos-api.git
  ```

- Na raiz do projeto, instale todas as dependências
  ```
  yarn install
  ```
- Copie o arquivo ".env.example" e crie um novo arquivo ".env", preenchendo as variáveis de ambiente corretamente.
- Rode as migrations da aplicação

  ```
   yarn typeorm migration:run -d src/data-source.ts
  ```

- Inicie o servidor

  ```
  yarn dev
  ```

## 3. Endpoints

A aplicação consiste em 3 endpoints, sendo eles:

- users
- login
- contacts

URL da aplicação: http://localhost:3000/

### 3.1.1. Criação de usuários

Esse endpoint tem como propósito o cadastro de um novo usuário, sendo necessário os campos: name, email, number e password.

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Frederico",
  "email": "frederico@mail.com",
  "password": "frederico123",
  "number": "5563983275446"
}
```

Caso tudo funcione bem, a resposta será:

```json
{
  "data": {
    "name": "Frederico",
    "email": "frederico@mail.com",
    "number": "5563983275446",
    "id": "35abff9d-c0b3-427b-bd6f-f1f62cbd7c04",
    "createdAt": "2023-02-01T21:26:37.466Z"
  }
}
```

### 3.1.2. Listagem de usuário

Esse endpoint tem como propósito a listagem de um usuário, buscando por seu id.

`GET/users/id - FORMATO DA REQUISIÇÃO`

```json
Vazio
```

Caso tudo funcione bem, a resposta será:

```json
{
  "data": [
    {
      "name": "Frederico",
      "email": "frederico@mail.com",
      "number": "5563983275446",
      "id": "35abff9d-c0b3-427b-bd6f-f1f62cbd7c04",
      "createdAt": "2023-02-01T21:26:37.466Z",
      "contacts": [
        {
          "id": "90c9e3c1-0f68-44ec-bd82-ada83d75dd0e",
          "name": "Eike",
          "email": "Eike@hotmail.com",
          "createdAt": "2023-02-01T23:21:17.385Z",
          "number": "5571873832702"
        }
      ]
    }
  ]
}
```

### 3.1.3. Listagem de usuários

Esse endpoint tem como propósito a listagem de todos os usuários cadastrados.

`GET/users - FORMATO DA REQUISIÇÃO`

```json
Vazio
```

Caso tudo funcione bem, a resposta será:

```json
[
  {
    "name": "Frederico",
    "email": "frederico@mail.com",
    "number": "5563983275446",
    "id": "35abff9d-c0b3-427b-bd6f-f1f62cbd7c04",
    "createdAt": "2023-02-01T21:26:37.466Z"
  },
  {
    "id": "394f9147-e18d-4c44-856e-95a6a9be54c9",
    "name": "Taylor Alison",
    "email": "taylor13@mail.com",
    "createdAt": "2023-02-05T14:39:36.752Z",
    "number": "5513987435671"
  },
  {
    "id": "67437d76-fc13-41ea-8e48-43f3a4456292",
    "name": "ZE",
    "email": "ze@ze.com",
    "createdAt": "2023-02-05T14:49:50.455Z",
    "number": "55139829325671"
  }
]
```

### 3.1.4. Edição de um usuário

Esse endpoint tem como propósito a edição de um usuário.

`PATCH/users/id - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Frederico Jr."
}
```

Caso tudo funcione bem, a resposta será:

```json
{
  "data": [
    {
      "name": "Frederico Jr.",
      "email": "frederico@mail.com",
      "number": "5563983275446",
      "id": "35abff9d-c0b3-427b-bd6f-f1f62cbd7c04",
      "createdAt": "2023-02-01T21:26:37.466Z",
      "contacts": [
        {
          "id": "90c9e3c1-0f68-44ec-bd82-ada83d75dd0e",
          "name": "Eike",
          "email": "Eike@hotmail.com",
          "createdAt": "2023-02-01T23:21:17.385Z",
          "number": "5571873832702"
        }
      ]
    }
  ]
}
```

### 3.1.5. Deletar um usuário

Esse endpoint tem como propósito deletar um usuário.

`DELETE/users/id - FORMATO DA REQUISIÇÃO`

```json
Vazio
```

### 3.2.1. Criação de um contato

Esse endpoint tem como propósito criar um contato.

`POST/contacts - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "eike",
  "email": "eike@hotmail.com",
  "number": "5575995196557"
}
```

Caso tudo funcione bem, a resposta será:

```json
{
  "data": {
    "id": "6e24993a-3ceb-4354-9c33-d1e885345499",
    "name": "eike",
    "email": "eike@hotmail.com",
    "createdAt": "2023-02-01T23:38:58.509Z",
    "number": "5575995196557"
  }
}
```

### 3.2.2. Edição de um contato

Esse endpoint tem como propósito editar um contato.

`PATCH/contacts/id - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "eike Jr.",
  "email": "eike123@hotmail.com"
}
```

Caso tudo funcione bem, a resposta será:

```json
{
  "data": {
    "id": "6e24993a-3ceb-4354-9c33-d1e885345499",
    "name": "eike Jr.",
    "email": "eike123@hotmail.com",
    "createdAt": "2023-02-01T23:38:58.509Z",
    "number": "5575995196557"
  }
}
```

### 3.2.3. Listagem de um contato

Esse endpoint tem como propósito listar um contato.

`GET/contacts/id - FORMATO DA REQUISIÇÃO`

```json
Vazio
```

Caso tudo funcione bem, a resposta será:

```json
{
  "data": [
    {
      "id": "6e24993a-3ceb-4354-9c33-d1e885345499",
      "name": "eike",
      "email": "eike@hotmail.com",
      "createdAt": "2023-02-01T23:38:58.509Z",
      "number": "5575992156557",
      "user": {
        "id": "35abff9d-c0b3-427b-bd6f-f1f62cbd7c04",
        "name": "Ana",
        "email": "ana@hotmail.com",
        "createdAt": "2023-02-01T21:26:37.466Z",
        "number": "5571971235779"
      }
    }
  ]
}
```

### 3.2.4. Deleção de um contato

Esse endpoint tem como propósito deletar um usuário.

`DELETE/users/id - FORMATO DA REQUISIÇÃO`

```json
Vazio
```

### 3.3.1. Login

Esse endpoint tem como propósito iniciar uma sessão na aplicação.

`POST/login/ - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "ana@hotmail.com",
  "password": "1234"
}
```

Caso tudo funcione bem, a resposta será:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1YWJmZjlkLWMwYjMtNDI3Yi1iZDZmLWYxZjYyY2JkN2MwNCIsImlhdCI6MTY3NTYwODAyOCwiZXhwIjoxNjc1Njk0NDI4LCJzdWIiOiIzNWFiZmY5ZC1jMGIzLTQyN2ItYmQ2Zi1mMWY2MmNiZDdjMDQifQ.ITdiHfSRajVzyFfNsQGGk5LoQG_qgavwsvJJThpxf6Q",
  "user": {
    "id": "35abff9d-c0b3-427b-bd6f-f1f62cbd7c04",
    "name": "Ana",
    "email": "ana@hotmail.com",
    "createdAt": "2023-02-01T21:26:37.466Z",
    "number": "5571992112349"
  }
}
```

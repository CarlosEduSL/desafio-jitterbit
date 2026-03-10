````markdown
# 📦 Desafio Técnico Jitterbit - API de Pedidos

Esta é uma API robusta desenvolvida em **Node.js** para o gerenciamento de pedidos, com foco em **Data Mapping** (transformação de dados) e persistência em banco de dados NoSQL (**MongoDB**).

A aplicação recebe dados de pedidos em português, realiza a tradução e mapeamento dos campos para o inglês conforme as regras de negócio e os armazena de forma persistente.

## 🚀 Tecnologias Utilizadas

- **Runtime:** Node.js (v20.x ou superior)
- **Framework:** Express.js
- **Banco de Dados:** MongoDB (via MongoDB Atlas)
- **ODM:** Mongoose
- **Segurança:** Dotenv para variáveis de ambiente
- **Desenvolvimento:** Nodemon para hot-reload

## 🛠️ Estrutura do Projeto

O projeto segue o padrão **MVC (Model-View-Controller)** dentro de um diretório centralizado de código-fonte (`src/`), garantindo organização e escalabilidade.

```text
├── src/
│   ├── config/      # Configuração de conexão com o Banco
│   ├── controllers/ # Lógica de negócio e mapping
│   ├── models/      # Schemas do Mongoose (Inglês)
│   ├── routes/      # Definição dos Endpoints
│   └── app.js       # Ponto de entrada da aplicação
├── .env             # Variáveis sensíveis (não commitado)
├── package.json     # Dependências e scripts
└── README.md        # Documentação
```
````

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js instalado (v20+)
- Conta no MongoDB Atlas ou MongoDB instalado localmente.

### Passo a Passo

1. **Clone o repositório:**

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd Desafio-Jitterbit

```

2. **Instale as dependências:**

```bash
npm install

```

3. **Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione sua string de conexão:

```env
PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/desafio-jitterbit

```

4. **Execute o servidor:**

```bash
npm start          # rodar normalmente
npm run dev        # rodar com nodemon em desenvolvimento
```

> A API retorna respostas com status `4xx` ou `5xx` e mensagens JSON em caso de falha. Mantenha seu `.env` fora do controle de versão.

## 📌 Endpoints da API

| Método     | Endpoint          | Descrição                                          |
| ---------- | ----------------- | -------------------------------------------------- |
| **POST**   | `/order`          | Recebe pedido em PT e salva com mapping em EN.     |
| **GET**    | `/order/list`     | Lista todos os pedidos cadastrados (opcional).     |
| **GET**    | `/order/:orderId` | Busca um pedido específico pelo `orderId`.         |
| **PUT**    | `/order/:orderId` | Atualiza campos de um pedido existente (opcional). |
| **DELETE** | `/order/:orderId` | Remove um pedido pelo `orderId` (opcional).        |

## 🔄 Lógica de Mapping (Transformação)

A API realiza automaticamente a seguinte conversão de dados:

| Campo de Entrada (PT)  | Campo de Saída (EN) | Tipo   |
| ---------------------- | ------------------- | ------ |
| `numeroPedido`         | `orderId`           | String |
| `valor Total`          | `value`             | Number |
| `dataCriacao`          | `creationDate`      | Date   |
| `items.idItem`         | `items.productId`   | Number |
| `items.quantidadeltem` | `items.quantity`    | Number |
| `items.valoritem`      | `items.price`       | Number |

## 🧪 Exemplo de Teste (CURL)

Você pode testar a criação de um pedido copiando e colando o comando abaixo no seu terminal:

```bash
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
    "numeroPedido": "v10089015vdb-01",
    "valor Total": 10000,
    "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
    "items": [
        {
            "idItem": "2434",
            "quantidadeltem": 1,
            "valoritem": 1000
        }
    ]
}'

```

Você também pode testar atualização e remoção:

```bash
# atualizar um pedido existente
curl -X PUT http://localhost:3000/order/v10089015vdb-01 \
  -H "Content-Type: application/json" \
  -d '{"valor Total":12000}'

# deletar um pedido
curl -X DELETE http://localhost:3000/order/v10089015vdb-01
```

---

Desenvolvido como parte do processo seletivo para a **Jitterbit**.

---

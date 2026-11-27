# DIO Bank

Projeto em TypeScript desenvolvido para praticar classes, herança, encapsulamento e métodos de contas bancárias.

## Funcionalidades

- Conta bancária base abstrata (`DioAccount`)
  - Controle de saldo
  - Depósito
  - Saque
  - Consulta de nome e saldo
  - Validação do status da conta
- Conta pessoa (`PeopleAccount`)
  - Herda os recursos de `DioAccount`
  - Possui documento identificador (`doc_id`)
- Conta empresa (`CompanyAccount`)
  - Herda os recursos de `DioAccount`
  - Permite solicitar empréstimo
- Conta com rendimento (`InterestAccount`)
  - Herda os recursos de `DioAccount`
  - Adiciona R$ 10 além do valor informado no depósito

## Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

Na pasta do projeto, execute:

```bash
npm install
```

### Execução

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O script utiliza `tsx watch app.ts`, que executa o arquivo principal e reinicia a aplicação quando um arquivo é alterado.

## Estrutura

```text
typescript/
├── app.ts
├── class/
│   ├── DioAccount.ts
│   ├── PeopleAccount.ts
│   ├── CompanyAccount.ts
│   ├── InterestAccount.ts
│   └── DESAFIO.TS
├── package.json
└── tsconfig.json
```

## Pontos do desafio

| Requisito | Situação |
| --- | --- |
| Implementar depósito e saque em `DioAccount` | Cumprido |
| Permitir saque apenas com status ativo e saldo suficiente | Cumprido |
| Implementar empréstimo em `CompanyAccount` | Cumprido |
| Permitir empréstimo apenas com status ativo | Cumprido |
| Criar um novo tipo de conta sem novos atributos | Cumprido em `InterestAccount` |
| Adicionar R$ 10 além do valor informado no novo tipo de conta | Cumprido em `depositInterest` |
| Criar instâncias dos tipos de conta em `app.ts` | Cumprido |
| Executar os métodos disponíveis em `app.ts` | Cumprido |

### Detalhes de implementação

- `DioAccount` é abstrata e contém o comportamento compartilhado pelas contas.
- Os depósitos somam R$ 10 ao saldo.
- Os saques só são realizados quando o status está ativo e o saldo é suficiente.
- `CompanyAccount.getLoan(amount)` soma o valor solicitado ao saldo.
- `InterestAccount.depositInterest(amount)` soma `amount + 10` ao saldo.
- `PeopleAccount` recebe `doc_id`, `name` e `accountNumber`.
- `validateStatus` utiliza `protected`, permitindo que também seja chamado pelas classes que herdam `DioAccount`.

### Ajustes pendentes

O requisito que determina que todos os atributos sejam privados não está totalmente aplicado: `balance` e `doc_id` continuam públicos. Além disso, `name` pode ser alterado pelo método `setName`, enquanto `accountNumber` é somente leitura após a construção.

<div align="center">

# 🏗️ Inacabados

### Todo projeto abandonado já foi uma vontade real.

Uma plataforma para adotar projetos abandonados de outras pessoas — código, marcenaria, escrita, jardim, música e costura — continuando exatamente de onde a última pessoa parou.

<img src="https://skillicons.dev/icons?i=react,typescript,vite,css,html" />

</div>

---

## 📖 Sobre o projeto

**Inacabados** nasceu de uma ideia simples: todo mundo já largou algo pela metade — um app, uma cadeira, um livro, um jardim, uma música. Em vez de deixar essas ideias morrerem esquecidas, o Inacabados conecta quem abandonou um projeto com alguém disposto a continuar, mostrando exatamente **em que ponto a pessoa parou** e **por quê**.

Cada card exibe uma barra de progresso "travada" — parte preenchida em laranja, parte com textura hachurada representando o que ainda falta, marcada com uma bandeirinha "parei aqui". Esse é o elemento visual de assinatura do projeto.

---

## ✨ Funcionalidades

- 🔍 **Busca por nome** do projeto
- 🏷️ **Filtro por categoria** (Código, Marcenaria, Escrita, Jardim, Música, Costura)
- 📊 **Estatísticas dinâmicas** calculadas em tempo real a partir dos dados (total de projetos, progresso médio, categorias ativas, projetos concluídos)
- 📄 **Paginação "Carregar mais"** — carrega os projetos em lotes, sem sobrecarregar a tela
- 🚩 **Barra de progresso customizada** com indicador visual de onde o projeto parou
- 📱 **Layout responsivo**, adaptado para desktop, tablet e mobile
- 🎯 **Modal de adoção** com confirmação de interesse

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| ⚛️ **React** | Construção da interface e componentização |
| 🔷 **TypeScript** | Tipagem estática de props, states e dados da API |
| ⚡ **Vite** | Build tool e ambiente de desenvolvimento |
| 🎨 **CSS Modules** | Estilização isolada por componente |
| 🗂️ **json-server** | API REST fake para simular o backend durante o desenvolvimento |
| 🧩 **Font Awesome** | Ícones utilizados na interface |

---

## 📁 Estrutura de pastas

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Infos/
│   ├── Filters/
│   ├── Projects/
│   ├── ProjectsCards/
│   ├── HowItWorks/
│   ├── PublishProject/
│   |── Footer/
│   └─ UI/
│   |  ├── ProgressBar/
├── App.tsx
├── index.css
└── main.tsx
db.json
```

Cada componente possui seu próprio arquivo `.module.css`, mantendo estilos isolados e evitando conflitos de nomenclatura entre componentes.

---

## 🔌 API (json-server)

O projeto consome uma API REST fake, criada com [json-server](https://github.com/typicode/json-server), a partir do arquivo `db.json`.

### Endpoints disponíveis

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/projects` | Lista todos os projetos |
| `GET` | `/projects/:id` | Busca um projeto específico |
| `POST` | `/projects` | Cria um novo projeto |
| `PATCH` | `/projects/:id` | Atualiza um projeto existente |
| `DELETE` | `/projects/:id` | Remove um projeto |
| `GET` | `/categories` | Lista todas as categorias |

### Estrutura de dados

```ts
interface Project {
  id: number;
  title: string;
  category: string;
  progress: number;   // 0 a 100
  stopped: string;    // tempo desde que parou, ex: "há 8 meses"
  author: string;
  reason: string;      // motivo pelo qual o projeto parou
}

interface Category {
  id: string;
  label: string;
}
```

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/inacabados.git
cd inacabados
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Suba a API fake (json-server)

Em um terminal separado, na raiz do projeto:

```bash
npx json-server --watch db.json --port 3000
```

A API ficará disponível em `http://localhost:3000`.

### 4. Rode o projeto

Em outro terminal:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou a porta indicada pelo Vite).

> ⚠️ É necessário que a API (json-server) esteja rodando **antes** de abrir o front-end, senão os projetos e categorias não serão carregados.

---


## 📌 Status do projeto

🚧 **Em desenvolvimento** — projeto de estudo, construído para praticar React, TypeScript, consumo de API e boas práticas de organização de componentes.

---

<div align="center">

Feito com 💻 e ☕ por **Bruno de Oliveira Ribeiro**

</div>

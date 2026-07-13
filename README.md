<div align="center">

# 🏗️ Inacabados

### Todo projeto abandonado já foi uma vontade real.

Uma plataforma para adotar projetos abandonados de outras pessoas — código, marcenaria, escrita, jardim, música e costura — continuando exatamente de onde a última pessoa parou.

<img src="https://skillicons.dev/icons?i=react,typescript,vite,css,html" />

<br /><br />

[![Ver projeto ao vivo](https://img.shields.io/badge/🔴_Ver_projeto_ao_vivo-E8703A?style=for-the-badge&logoColor=white)](https://sbrunoli.github.io/Projeto-Inacabados/)

</div>

---

## 👁️‍🗨️ Preview

<div align="center">

<img width="1280" height="630" alt="chrome-capture-2026-07-13 (2)" src="https://github.com/user-attachments/assets/5da5c08b-3fbe-4d89-bc1b-8088d6c62bf3" />

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
| 🗂️ **json-server** | API REST fake, hospedada no [Render](https://render.com) em produção |
| 🧩 **Font Awesome** | Ícones utilizados na interface |
| 📄 **GitHub Pages** | Hospedagem do front-end |

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
│   ├── Footer/
│   └── UI/
│       └── ProgressBar/
├── App.tsx
├── index.css
└── main.tsx
db.json
```

Cada componente possui seu próprio arquivo `.module.css`, mantendo estilos isolados e evitando conflitos de nomenclatura entre componentes.

---

## 🔌 API (json-server)

O projeto consome uma API REST fake, criada com [json-server](https://github.com/typicode/json-server), a partir de um `db.json`.

Em produção, essa API roda hospedada gratuitamente no **Render**, num repositório separado ([`inacabados-api`](https://github.com/SBrunoli)), e é essa versão em nuvem que o site publicado no GitHub Pages consome.

> ⚠️ Por estar no plano gratuito do Render, a API "dorme" após 15 minutos sem uso. A primeira requisição depois de um tempo parado pode levar de 30 a 60 segundos para responder, enquanto o serviço reinicia.

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

## 💻 Rodando o projeto localmente

Quer rodar na sua máquina, em vez de só acessar o link publicado? Siga os passos abaixo.

### 1. Clone o repositório

```bash
git clone https://github.com/SBrunoli/Projeto-Inacabados.git
cd Projeto-Inacabados
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Escolha a API que vai usar

**Opção A — usar a API já hospedada no Render (mais rápido, nada para configurar):**
O projeto já vem configurado para consumir a API em produção. Pule direto para o passo 4.

**Opção B — rodar sua própria API local (útil se quiser testar `POST`/`PATCH`/`DELETE` sem afetar os dados em produção):**
```bash
npx json-server --watch db.json --port 3000
```
Depois, troque as URLs de `fetch` no `App.tsx` para `http://localhost:3000`.

### 4. Rode o projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou a porta indicada pelo Vite).

---

## 📌 Status do projeto

🚧 **Em desenvolvimento** — projeto de estudo, construído para praticar React, TypeScript, consumo de API, deploy e boas práticas de organização de componentes.

---

<div align="center">

Feito com 💻 e ☕ por **Bruno de Oliveira Ribeiro**

</div>

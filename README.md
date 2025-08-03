# 💸 FinTrack - Dashboard Financeiro

Um aplicativo web desenvolvido em **React.js** para controle de finanças pessoais. Permite o registro de transações (entradas e saídas), cálculo automático de saldo real, visualização de dados com gráficos interativos, além de um layout responsivo com **Tailwind CSS**.

---

## 🚀 Funcionalidades

- ✅ Cadastro de transações (entradas e saídas)
- 📊 Visualização de gráficos (pizza e linha) com **Recharts**
- 💰 Cálculo automático do saldo total
- 🧾 Histórico de transações
- 🗑 Deleção de transações
- 💾 Persistência de dados com `localStorage`
- 📱 Layout responsivo e moderno com Tailwind

---

## 🛠 Tecnologias utilizadas

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

---

## 🧩 Estrutura do Projeto

```bash
src/
├── assets/                 # Imagens e ícones (favicon, etc.)
├── components/             # Componentes reutilizáveis
│   ├── TransactionForm.jsx
│   ├── TransactionList.jsx
│   ├── DashboardChart.jsx
├── context
│   ├── AuthContext.jsx     # Lógica da autenticação (user)
├── pages
│   ├── Dashboard.jsx       # Dashboard do usuário
│   ├── Login.jsx           # Página de login
│   ├── Register.jsx        # Página de cadastro
├── routes/                 # Sistema de rotas
├── services/               # Conexão com o firebase
├── App.jsx                 # Componente principal
├── index.js                # Ponto de entrada do app
```

---

## 📈 Gráficos com Recharts

- **Pizza**: mostra a proporção entre entradas e saídas
- **Linha**: exibe o histórico temporal das transações

---

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/LeonardoCaml/fintrack.git
cd fintrack
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

---

## 📂 Como usar

1. Preencha o formulário com a descrição, valor e tipo da transação.
2. Clique em "Adicionar Transação".
3. As transações serão salvas no `localStorage`.
4. Use o botão "Excluir" para deletar transações.
5. Visualize os gráficos atualizados em tempo real.

---

## ✨ Melhorias futuras

- Integração com **Firebase Firestore** para persistência na nuvem
- Autenticação de usuários (Google, Email e Senha)
- Filtro por data e categorias
- Exportação de relatórios em PDF ou Excel
- Alternância de tema claro/escuro

---

## 📌 Licença

Este projeto está sob a licença MIT.

---

## 🙌 Autor

Feito com 💚 por [Leonardo Camelo](https://github.com/LeonardoCaml)

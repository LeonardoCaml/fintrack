import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import DashboardChart from "../components/DashboardChart";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [transacoes, setTransacoes] = useState([]);

  // Carregar transações do localStorage ao iniciar
  useEffect(() => {
    const dados = localStorage.getItem("transacoes");
    if (dados) {
      setTransacoes(JSON.parse(dados));
    }
  }, []);

  // Salvar transações sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  // Função para adicionar
  const handleAdd = (transacao) => {
    setTransacoes([...transacoes, transacao]);
  };

  // 🔥 Função para deletar
  const handleDelete = (id) => {
    const novas = transacoes.filter((t) => t.id !== id);
    setTransacoes(novas);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const entradas = transacoes
    .filter((t) => t.tipo === "entrada")
    .reduce((acc, t) => acc + t.valor, 0);
  const saidas = transacoes
    .filter((t) => t.tipo === "saida")
    .reduce((acc, t) => acc + t.valor, 0);
  const saldo = entradas - saidas;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-6xl font-bold">FinTrack</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm hidden md:block">Olá, {user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
          >
            Sair
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm text-gray-600">Saldo Atual</h2>
          <p
            className={`text-xl font-bold ${
              saldo >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            R$ {saldo.toFixed(2)}
          </p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm text-gray-600">Entradas</h2>
          <p className="text-xl font-bold text-green-600">
            R$ {entradas.toFixed(2)}
          </p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-sm text-gray-600">Saídas</h2>
          <p className="text-xl font-bold text-red-600">
            R$ {saidas.toFixed(2)}
          </p>
        </div>
      </section>

      <TransactionForm onAdd={handleAdd} />
      <TransactionList transacoes={transacoes} onDelete={handleDelete} />
      <DashboardChart transactions={transacoes} />
    </div>
  );
}

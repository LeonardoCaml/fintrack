import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("entrada");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descricao || !valor) return;

    const novaTransacao = {
      id: Date.now(),
      descricao,
      valor: parseFloat(valor),
      tipo,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    onAdd(novaTransacao);
    setDescricao("");
    setValor("");
    setTipo("entrada");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4 bg-white dark:bg-zinc-800 p-4 rounded shadow mb-4">
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="p-2 border rounded md:col-span-2"
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="p-2 border rounded"
      />
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="p-2 border rounded"
      >
        <option className="dark:bg-zinc-900" value="entrada">Entrada</option>
        <option className="dark:bg-zinc-900" value="saida">Saída</option>
      </select>
      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700 md:col-span-4"
      >
        Adicionar Transação
      </button>
    </form>
  );
}

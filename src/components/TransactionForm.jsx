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
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded p-4 mb-6 grid gap-4 md:grid-cols-4"
    >
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="p-2 border rounded col-span-2"
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
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      <button
        type="submit"
        className="md:col-span-4 bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Adicionar Transação
      </button>
    </form>
  );
}

export default function TransactionList({ transacoes, onDelete }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">Histórico</h2>
      <ul className="space-y-2 max-h-60 overflow-y-auto">
        {transacoes.length === 0 && (
          <p className="text-sm text-gray-400">Nenhuma transação registrada.</p>
        )}
        {transacoes.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-2 border-l-4 ${
              t.tipo === "entrada" ? "border-green-500" : "border-red-500"
            }`}
          >
            <div>
              <p className="font-medium">{t.descricao}</p>
              <p className="text-xs text-gray-500">{t.data}</p>
            </div>
            <span
              className={`text-sm font-bold ${
                t.tipo === "entrada" ? "text-green-600" : "text-red-600"
              }`}
            >
              {t.tipo === "saida" ? "-" : "+"} R$ {t.valor.toFixed(2)}
            </span>
            <button
              onClick={() => onDelete(t.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

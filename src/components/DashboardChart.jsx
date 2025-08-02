import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const DashboardChart = ({ transactions }) => {
  // Agrupando saldo acumulado por data
  const dataPorData = [];
  let saldoAcumulado = 0;

  const porData = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((tx) => {
      saldoAcumulado += tx.type === 'entrada' ? tx.amount : -tx.amount;
      return {
        date: new Date(tx.date).toLocaleDateString(),
        saldo: saldoAcumulado,
      };
    });

  // Dados para o gráfico de pizza
  const entradas = transactions
    .filter((tx) => tx.type === 'entrada')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const saidas = transactions
    .filter((tx) => tx.type === 'saida')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const pieData = [
    { name: 'Entradas', value: entradas },
    { name: 'Saídas', value: saidas },
  ];

  const COLORS = ['#22c55e', '#ef4444']; // Verde e Vermelho

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-full">
      {/* Gráfico de Linha */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Saldo ao Longo do Tempo</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={porData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="saldo" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Pizza */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Distribuição</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
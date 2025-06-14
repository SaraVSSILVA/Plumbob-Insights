import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TitularData {
  Nome: string;
  ValorCompra: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#8884d8'];

export default function GraficoPizzaTitular() {
  const [dados, setDados] = useState<TitularData[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/gasto-titular')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={dados}
          dataKey="ValorCompra"
          nameKey="Nome"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {dados.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
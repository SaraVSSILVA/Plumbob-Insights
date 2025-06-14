import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface TitularData {
  Nome: string;
  ValorCompra: number;
}

export default function GraficoTitular() {
  const [dados, setDados] = useState<TitularData[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/gasto-titular')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dados}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Nome" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="ValorCompra" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
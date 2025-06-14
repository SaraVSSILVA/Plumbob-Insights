import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface CategoriaData {
  categoria: string;
  ValorCompra: number;
}

export default function GraficoCategoria() {
  const [dados, setDados] = useState<CategoriaData[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/gasto-categoria')
      .then(res => res.json())
      .then(data => setDados(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dados} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="ValorCompra" />
        <YAxis type="category" dataKey="categoria" />
        <Tooltip />
        <Bar dataKey="ValorCompra" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
import React, { useEffect, useState } from 'react';
import GraficoTitular from './components/GraficoTitular';
import GraficoCategoria from './components/GraficoCategoria';
import GraficoPizzaTitular from './components/GraficoPizzaTitular';
import './App.css';

function App() {
  const [valorTotal, setValorTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/valor-total')
      .then(res => res.json())
      .then(data => setValorTotal(data.valor_total));
  }, []);

  return (
    <div className="dashboard-container">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <svg width="48" height="64" viewBox="0 0 48 64">
          <polygon points="24,0 48,32 24,64 0,32" fill="#39c23e" stroke="#228b22" strokeWidth="2"/>
        </svg>
      </div>
      <h1>SimDash — Sua Mansão de Dados</h1>
      <p>
        Valor total do SimoleonBank:{' '}
        {valorTotal !== null ? `§ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : 'Carregando...'}
      </p>
      <div className="grafico-card">
        <h2>🧑‍🤝‍🧑 Gasto por Titular</h2>
        <GraficoTitular />
      </div>
      <div className="grafico-card">
        <h2>🏷️ Gasto por Categoria</h2>
        <GraficoCategoria />
      </div>
      <div className="grafico-card">
        <h2>🥧 Distribuição dos Gastos</h2>
        <GraficoPizzaTitular />
      </div>
    </div>
  );
}

export default App;
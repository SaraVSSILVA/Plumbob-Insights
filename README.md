📊 SimDash — Um Dashboard de Dados com Espírito de The Sims 📚

Este projeto nasceu da ideia de transformar análises de dados em algo mais envolvente — como construir uma casa em The Sims: escolher o terreno (dataset), levantar as paredes (API) e decorar com estilo (gráficos interativos). Criado com Python (Flask) no backend e React no frontend, este dashboard é sua vizinhança digital personalizada.
Os dados são lidos de um CSV (o seu “livro de registros”) e visualizados como se fossem aspirações e humores: claros, objetivos e prontos para contar histórias.

🎯 Funcionalidades
- 💰 Cálculo do valor total dos dados (tipo saldo do SimoleonBank)
- 📊 Gráficos de barras por titular ou categoria — escolha sua lente
- 🧁 Gráfico de pizza para distribuição dos dados — porque visual também alimenta a mente
- 🔧 Backend com Flask servindo a API de dados
- 💻 Frontend com React traduzindo tudo em visualizações amigáveis dignas de Plumbob

🛠️ Tecnologias Usadas
- Python 3
- Flask + Flask-CORS
- Pandas
- React
- Recharts
(Um pouco de ciência da computação, um pouco de encantamento gráfico.)

🚀 Como rodar o projeto

1. Clone o projeto:
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

3. Backend (Python + Flask)
   
pip install flask flask-cors pandas

python app.py


A API estará disponível em http://127.0.0.1:5000.

3. Frontend (React)
   
cd meu-frontend

npm install

npm start


A aplicação abrirá em http://localhost:3000.

🗂️ Estrutura da Mansão Digital
/
├── app.py                # API com Flask
├── fatura.csv            # Base de dados (tipo o livro da família Goth)
└── meu-frontend/         # Interface visual
    ├── src/
    │   ├── App.tsx
    │   └── components/
    │       ├── GraficoTitular.tsx
    │       ├── GraficoCategoria.tsx
    │       └── GraficoPizzaTitular.tsx
    └── ...



✨ Personalização
Quer simular outro bairro? Basta trocar o CSV e, se necessário, ajustar os endpoints. A API e os gráficos se adaptam rapidinho — igual trocar o papel de parede da cozinha.

📸 Prints

Em construção...

📜 Licença
MIT — Use, modifique, crie expansões, só não coloque fogo na casa do vizinho.

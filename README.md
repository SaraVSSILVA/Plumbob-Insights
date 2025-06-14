<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> 6c02595 (add)

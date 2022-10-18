import express from 'express';
import dotenv from 'dotenv';
import mustache from'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'

// Variáveis de Ambiente
dotenv.config();

// Servidor do Sistema
const server = express();

// Template Engine Usado no HTML
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Pasta Pública Estática 
server.use(express.static(path.join(__dirname, '../public')));

//ROTAS
server.use(mainRoutes);

// Página Não Encontrada
server.use((req, res) => {
    res.status(404).send('página não encontrada')
});

// Running System on Port 3000
server.listen(process.env.PORT);
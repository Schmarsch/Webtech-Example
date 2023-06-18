import express from 'express';
import cookieParser from 'cookie-parser';
import mustache from 'mustache-express';
import cookieMiddleware from './middlewares/cookie.js';
import pokemonRouter from './routes/pokemon.js';
import logger from './middlewares/logger.js';

const app = express();
const port = 3000;

/* middleware */
app.use(cookieParser())
app.use('/pokemon', cookieMiddleware)
app.use(logger);

app.engine('html', mustache());
app.set('views', './views');


/* routes */
app.use('/pokemon', pokemonRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} \n`);
})
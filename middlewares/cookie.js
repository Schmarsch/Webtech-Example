import express from 'express';

const cookieMiddleware = express.Router();

cookieMiddleware.get('/', (req, res, next) => {
    res.cookie('lieblings_pokemon', 'pikachu');
    next();
})

export default cookieMiddleware;
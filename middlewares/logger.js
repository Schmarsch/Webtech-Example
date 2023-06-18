import express from 'express';

const logger = express.Router();

let counter = 0

logger.use((req, res, next) => {
    console.log(`[Req ${counter}] -- Time: ${new Date().toLocaleString()}`);
    console.log(`[Req ${counter}] -- Request: ${req.url}`);
    console.log(`[Req ${counter}] -- Cookies: ${JSON.stringify(req.cookies)} \n`);
    counter++;
    next();
})

export default logger;
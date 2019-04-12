import bodyParser from 'body-parser';
import express from 'express';

import { Message } from './models';
import { Watson } from './services';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/message', (req, res, next) => {
    const assistant = new Watson();
    const body: Message = req.body;

    assistant.createService()
        .createSession()
        .then(() => assistant.sendMessage(body.input.text))
        .then(response => res.status(200).json(response))
        .catch(next);
});

export default app;
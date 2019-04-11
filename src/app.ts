import express from "express";
import bodyParser from "body-parser"
import { Watson } from "./services";
import { Message} from "./models";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/message', (req, res) => {
    const assistant = new Watson();
    const body: Message = req.body;

    assistant.createService()
        .createSession()
        .then(() => assistant.sendMessage(body.input.text))
        .then(response => res.send(response))
        .catch(err => res.send(err))
})

export default app;
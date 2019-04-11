import app from "./app"
import { config } from "dotenv"
config();

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})
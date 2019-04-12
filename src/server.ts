import { config } from 'dotenv'

import app from './app'

config();

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})
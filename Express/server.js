import express, { json, urlencoded } from 'express';
import path from 'path';
import post from './routes/post.js';

const app = express();

app.use(json()); // Must be before routes
app.use(urlencoded({ extended: false }));

app.use('/api/post', post);

app.listen(5000, () => console.log(`App running on port 5000`));

import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import path from 'path';
import products from './products.js';
dotenv.config();
const app = express();
connectDB();

app.use(express.json());


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend', 'build', 'index.html')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
    })
}

app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


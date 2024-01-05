const express = require('express')
const app = express

app.use((req, res) => {
    res.status(404).send('404 page')
})

app.get('/',(req, res) => {
    res.status(200).send('Homepage')
})

app.get('/Properties', (req, res) => {
    res.status(200).send('Properties')
})

app.get('/Form', (req, res) => {
    res.status(200).send('Form')
})

app.listen(3000, () => {
    console.log('Listing on PORT 3000')
})
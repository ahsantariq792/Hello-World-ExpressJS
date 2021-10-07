const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/profile', (req, res) => {
    res.send('here is your profile')
})
app.post('/profile', (req, res) => {
    res.send('profile is created')
})


app.put('/profile', (req, res) => {
    res.send('profile is updated')
})
app.delete('/profile', (req, res) => {
    res.send('profile is deleted')
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
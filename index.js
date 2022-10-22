const express = require('express')
const app = express()

app.get('/', (req, res) => {
})

app.get('/getname', (req, res) => {
    res.send('Nikorn Nuanaun')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Nikorn Nuanaun',
        age: 500,
        apocalypse: 'GGEZ',
        detail: 'GGWP',
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {
        name: 'Nikorn Nuanaun',
        age: 500,
        email: 'pakmerciles@gmail.com',
        address: 'Bangkok Rama3 ,10120',
    }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'B4-308_18',
        project_description: 'nani',
        project_link: 'https://youtu.be/b34NbnMW7T8',
    }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {
        address: 'Bangkok Rama3 ,10120',
        email: 'pakmerciles@gmail.com',
        phone_number: '0955137293',
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})
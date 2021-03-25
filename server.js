const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000


app.use(cors())


let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London'
    },
    'chance the rapper': {
        'age': 28,
        'birthName': 'Chancelor Jonhathon Bennett',
        'birthLocation': 'Chicago, Illinois',
    },
    'kendrick lamar': {
        'age': 33,
        'birthName': 'Kendrick Lamar Duckworth' ,
        'birthLocation': 'Compton, California'
    },
    'dylan': {
        'age': 300,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase();
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }   else{
        response.json(rappers['dylan'])
    }
    
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


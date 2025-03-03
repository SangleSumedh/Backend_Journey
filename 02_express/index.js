import 'dotenv/config'
import express from 'express';

const app = express()
const port = process.env.PORT||3000;
app.use(express.json())

let teaData = []
let nextId = 1

//add a new tea
app.post('/tea', (req,res)=>{
    const {name, price} = req.body
    const newTea  = {id:nextId++, name, price}
    teaData.push(newTea);
    res.status(201).send(newTea)
})

//get all tea
app.get('/tea', (req,res)=>{
    res.status(200).send(teaData)
})

//get tea with id
app.get('/tea/:id', (req,res)=>{
    const tea = teaData.find(t=>t.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send('Tea not found');
    } else{
        return res.status(200).send(tea)
    }
} )

//update tea
app.put('/tea/:id', (req,res)=>{
    const tea = teaData.find((t) => t.id === parseInt(req.params.id));
    if (!tea) {
        return res.status(404).send('Tea not found')
    } 
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

//delete tea
app.delete('/tea/:id', (req,res) => {
    const teaIndex = teaData.findIndex(t=>t.id === parseInt(req.params.id))
    if (teaIndex === -1) {
        return res.status(404).send('Tea not found')
    } 
    teaData.splice(teaIndex,1)
    return res.status(204).send('Deleted!')

})

app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}...`)
})


const express = require("express");
const mongoose = require("mongoose");
const BodyParser = require("body-parser")
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(BodyParser.json())


const mongoURI='mongodb+srv://tomascastrillon8245:Tomi12182006@cluster0.kltpf.mongodb.net/'


mongoose.connect( mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => { console.log('Conectado a MongoDB Atlas'); })
    .catch(err => {console.error('Error de conexión a MongoDB Atlas', err);});  



const { Schema } = mongoose;
const userSchema = new Schema({ name: String, age: Number });
const user = mongoose.model('user', userSchema)



app.post('/user', async (req, res) => {
  const {name, age} = req.body;

  if(!name || !age ){
    return res.status(400).json({ error: 'Nombre y edad son requeridos'})
  }

  const newUser = new user({ name, age });
  

  try {
      const saveduser = await newUser.save();
      res.status(201).json('user añadido con éxito');
    } catch (err) {
      res.status(400).send('Error al añadir user');
    }
});



app.get('/users', async (req, res) => {
  try {
    const users = await user.find();
    if (users.length == 0){
      return res.status(404).json({ message: 'no se encontro usuarios'})
    }
    res.json(users);
  } catch (err) {
    console.error('encontrando users', err);
    res.status(500).json({ message: 'error encontrando users'})
  }
})

app.listen(8080, () =>{
    console.log("server started on port 8080");
}); 
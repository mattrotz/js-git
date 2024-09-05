const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};



const mongoURI='mongodb+srv://tomascastrillon8245:Tomi12182006@cluster0.kltpf.mongodb.net/'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )
.then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error de conexión a MongoDB Atlas', err);
  });



app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.json({"fruits": ['apple','orange', 'banana']});
});

app.listen(8080, () =>{
    console.log("server started on port 8080");
}); 
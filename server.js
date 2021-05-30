const express = requiere ('express');
const app = express()
var mongoose = requiere ('mongoose');

// runtas

const router = express.router;

const indexRoutes = requiere('./routes/index.js')

//configurar callback para contectar a la db


mongoose.connect("test:Mr4hM1xiLpgeJVT8@cluster0.8jxok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,{
    useNewUrlParser: true, 
    useUnifiedTopology: true   
})




const port = process.env.PORT || 30000;
app.use (express.static(__dirname+ './public'));


app.use(express.urlencoded({extended: false}));

// 
app.set('views',__dirname + '/views');
app.set('view enginen', 'ejs');

app.user ('/', indexRoutes);

app.get('/', function(req, res){

    res.send('Mi servidor')
}).then(()=> {
console.log('la conexion a mongo atlas se hizo correctamente');
})

app.listen(port, ()=> {
console.log ('servidor corriendo');
});







const  express = require("express") ;
const app = express();

const port  = 3001;


app.set('view engine', 'ejs')
app.set('views',__dirname+ '/views')

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/pago', (req, res) => {
    res.render('pagos',{titulo:"hola soy pago"})
})

app.listen(port, () => {
    console.log(`Listening in port ${port}`)
})
    

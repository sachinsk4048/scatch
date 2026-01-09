const path = require('path')

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(espress.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.set('veiw engine','ejs');

app.get('/',(req,res)=>{
    res.send('hyy');
})

app.listen(3000);
const express = require('express');
const morgan = require('morgan');
const app = express()
app.set('view engine','ejs')
// app.set('views','template/views')

const userRouter = require('./router')

app.use('/user',userRouter);
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    let post = {
        title:'Test Title',
        body:'Test Body',
        published:true,
    }

    let posts =[
        {title:'Title One','author':' Qayum Hasan'},
        {title:'Title two','author':' Qayum Hasan'},
        {title:'Title three','author':' Qayum Hasan'},
        {title:'Title four','author':' Qayum Hasan'}
    ]
    res.render('index',{title:'EJS is an Awesome Template Engine fdsafdsafdsa',post,posts});
})


app.get('/about',(req,res)=>{
    res.render('pages/about')
})
app.get('*',(req,res)=>{
    res.send('<h1>Check</h1>');
})





const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})
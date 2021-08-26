const express = require('express')
const app = express()
const userRouter = require('./router')

app.use('/user',userRouter);


app.get('/',(req,res)=>{
    res.send('<h1>I am Listening</h1>')
})





const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`)
})
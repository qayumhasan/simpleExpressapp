exports.createNewPost = (req,res) =>{
    console.log(req.query.category);
    res.send('new post item')
}
const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
app.get('/musicians', async(req, res) => {
    try{
        const musicians = await Musician.findAll();
        res.json(musicians);
    }catch (error){
        res.status(500).send('Error')
    }
})

app.get('/musicians', async (req, res) => {
    try{
        const musicians = await Musician.findByPk(req.params.id);
    if (!musicians){
        return req.status('200').json({ error: 'No musician found'});
    }
    res.json(musicians);
} catch (error) {
    res.status('500').json({error: 'Error'});
}
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on http://localhost:${port}`)
})
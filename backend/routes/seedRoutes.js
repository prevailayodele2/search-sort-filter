
const express = require("express");
const movies = require("../config/movies.json");
const Movie = require("../models/Movie");


const seedRouter = express.Router()


seedRouter.get('/', async (req, res) => {
    await Movie.remove({})
    const  createdProducts = await Movie.insertMany(movies);
    
    
    res.send({createdProducts})
})

module.exports = seedRouter;
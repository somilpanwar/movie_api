const data = require('../models/movies');

const Getdetails = async(req,res)=>{
    
    const {movie_name, language}=req.params;
    
   
    let detail =[];
try {
    if(movie_name){
        
        const name = movie_name.toLowerCase();
    detail = await data.find({
        movie_name : {$regex : new RegExp(name, "i")}
    }) ;
    res.status(200).send(detail);
    }else if(language){
        detail = await data.find({
            language :{$regex : new RegExp(language,"i")}
        })
        res.status(200).send(detail);

    }
    else{
        detail = await data.find();
        res.send(detail)
    }

} catch (error) {
    console.log("fetching error!!");
}

}

module.exports = Getdetails;
const {Character}=require("../DB_connection")

const postFav= async(req,res)=>{
    try {
        const {id,name,origin,status,image,species,gender}=req.body;
      if(!name || !origin || !status || ! image || !species|| !gender ){
        return res.status(401).send("faltan datos")
      }
      await Character.findOrCreate({where:{name,origin,status,image,species,gender }})
      const allFavorites= await Character.findAll()
      return res.status(200).json(allFavorites)
    } catch (error) {
        return res.status(500).send({error:message})
    }
      
}

module.exports=postFav;

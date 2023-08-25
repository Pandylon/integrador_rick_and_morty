const {character, Character}=require("../DB_connection")

const deleteFav = async (req,res)=>{
    try {
        const {id}=req.params
        await Character.destroy({where:{id}})
        const allFavorites=await Character.findAll()
        return res.json(allFavorites)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports=deleteFav;

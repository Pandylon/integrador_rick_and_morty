
const {getCharById}=require("../contollers/getCharById")
const {getFav}=require("../contollers/handleFavorites")
const postFav=require("../contollers/postFavs")
const deleteFav=require("../contollers/deleteFav")
const login=require("../contollers/login")
const postUser=require("../contollers/postUser")
const router=require("express").Router()

router.get("/character/:idChar",(req,res)=>{
    getCharById(req,res);
})
//tambien s epuede pasar directamente el nombre d ela funcion
router.get("/login",login)
router.post("/login",postUser)
router.get("/fav",getFav)

router.post("/fav",(req,res)=>{
    postFav(req,res);
})
router.delete("/fav/:id",(req,res)=>{
    deleteFav(req,res);
})

module.exports={router};
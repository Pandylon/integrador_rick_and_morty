/*const {users}=require("../utils/users")

const login = (req, res) =>{ 
const {email,password}= req.query;

const userFound=users.find((user)=> user.email === email && user.password === password)
    return userFound
    ?  res.status(200).json({access:true}) 
    :  res.status(404).json({access:false}) 
    //if(userFound){
       // return res.status(200).json({access:true})}
       // else{

    //return res.status(404).json({access:false}) }                              
        
}

module.exports={
    login
}*/

const {User}=require("../DB_connection")

const login = async(req, res) =>{ 
    
    
    try {
        const {email,password}= req.query;
        if(!email || !password)return res.status(400).sen("faltan datos")
        const user= await User.findOne({where:{email}})
          if(!user) return res.status(404).send("Usuario no encontrado")
          return user.password === password
          ? res.json({access:true})
          :res.status(403).send("contraseña incorrecta")
          
      
    } catch (error) {
        return res.status(500).json(error.message)
    }
                              
            
    }

    module.exports=login;


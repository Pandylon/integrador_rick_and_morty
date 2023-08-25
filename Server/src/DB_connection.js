require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
const UserModel=require('./models/User');
const CharacterModel=require('./models/Character');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

   // URL
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
        UserModel(sequelize);
        CharacterModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User,Character} = sequelize.models;
 User.belongsToMany(Character, {through:"user_favorite"})
 Character.belongsToMany(User,{through:"user_favorite"})

module.exports = {
    User,
   Character,
   conn: sequelize
};

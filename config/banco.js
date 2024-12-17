import sequelize from "sequelize";

const db = new sequelize('lojatest', 'root', "", {
    dialect: 'mysql',
    host: 'localhost',
    post: '3306',
    define:{
        timesTamps: false,
    }
})

export default db;
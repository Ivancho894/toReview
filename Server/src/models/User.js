const {DataTypes}=require("sequelize");


module.exports=(sequelize)=>{
    sequelize.define("user",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        }
    })
}
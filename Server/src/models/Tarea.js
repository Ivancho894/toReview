const {DataTypes}=require("sequelize");


module.exports=(sequelize)=>{
    sequelize.define("tarea",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        state:{
            type:DataTypes.BOOLEAN,
        },
        priority:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
}
import Sequelize from 'sequelize';


export const sequelize = new Sequelize('dbpostgres', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
})
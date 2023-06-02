import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

export const ProductCategory = sequelize.define('Product_type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
})


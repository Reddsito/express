import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';
import { ProductCategory } from './ProductCategory.js';

export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  src: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
})

Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });


import { Sequelize } from 'sequelize';
import { Product } from '../models/Product.js';
import { ProductCategory } from '../models/ProductCategory.js';

export const getProjects = async (req, res) => {
  try {
    const { name, sort } = req.query;
    let products;

    const whereClause = {};

    if (name && name.length > 0) {
      whereClause.name = {
        [Sequelize.Op.like]: `%${name}%`
      };
    }

    const orderClause = [];

    if (sort === 'priceDesc') {
      orderClause.push(['price', 'DESC']);
    } else if (sort === 'priceAsc') {
      orderClause.push(['price', 'ASC']);
    } else if (sort === 'name') {
      orderClause.push(['name', 'ASC']);
    } 

    console.log({orderClause})

    products = await Product.findAll({
      where: whereClause,
      order: orderClause
    });

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
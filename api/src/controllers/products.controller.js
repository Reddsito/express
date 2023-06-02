import { Sequelize } from 'sequelize';
import { Product } from '../models/Product.js';
import { ProductCategory } from '../models/ProductCategory.js';

export const getProjects = async (req, res) => {
  try {
    const { query: name } = req.query;
    let products;

    console.log(name)


    if ( name && name?.length > 0) {
      console.log('entro aqui')
      // Si se proporcionan queries de filtro, realizar la consulta filtrada
      products = await Product.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`
          }
        }
      });
    } 

    if (!name) {
        // Si no se proporcionan queries de filtro, obtener todos los productos
        products = await Product.findAll();
      
    }

    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
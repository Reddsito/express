import app from './app.js'
import { sequelize } from './db/db.js'
import { Product } from './models/Product.js';
import { ProductCategory } from './models/ProductCategory.js';

async function main() {
 try {
  await sequelize.sync({force: false})
  console.log('Database connected')
  app.listen(3000, () => {
      console.log(`Listening in port ${3000}`)
  })
 } catch(e) {
  console.log(e)
 }
}

main();
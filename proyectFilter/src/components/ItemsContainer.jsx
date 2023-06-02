import useProducts from "../hooks/useProducts";

const ItemsContainer = () => {
  const getProducts = useProducts();

  const products = getProducts.data || [];

  if (getProducts.isLoading) {
    return (
      <div className="flex w-75">
        <h1>LOADING...</h1>
      </div>
    );
  }

  return (
    <div className="products">
      <div>
        {products.map((product) => {
           
          return (
            <div key={product.name} >
    
              <a >
                <div className="">
                  <img
                    style={{ objectFit: 'cover', height: '420px' }}
                    alt=""
                    className=""
                    src={product.src}
                  />

                  <div >
                    <b>{product.name}</b>
                    <p className="mb3 gray">{product.color}</p>
                    <p>${product.price / 100}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 
export default ItemsContainer;
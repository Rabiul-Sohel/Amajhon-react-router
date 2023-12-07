import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
  const {products} = useLoaderData()
 
  return (
    <div>
      <h2>Products : {products.length} </h2>
      <div className="grid grid-cols-4 gap-5">
        {
          products?.map(product=> <Product key={product.id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;
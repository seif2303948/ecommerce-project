import { Products } from './Products.jsx';
export function ProductsGrid({text , products , loadCart}){
    let filteredProducts = products.filter((product) =>
            product.keywords.some((keyword)=>{
                return keyword.toLowerCase().includes(text.toLowerCase());
            })
        )
        
    return(
        <>
            {
            filteredProducts.map((filteredProduct)=>{
                return(
                   <Products filteredProducts ={filteredProduct} loadCart={loadCart} key = {filteredProduct.id}/>
                )
            })
        }
        </>
    );
    
}
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import  Header  from '../components/Header.jsx'
import '../css/home-page.css'




function Products({text , products}){
    let filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(text.toLowerCase())
        )
            
    if(products.length > 0){
        return(
            <>
                {   
                    filteredProducts.map((product) =>{
                        return(
                            <div key = {product.id} className="product-container">
                                <div className="product-image-container">
                                    <img className="product-image"
                                    src={product.image} />
                                </div>
                
                                <div className="product-name limit-text-to-2-lines">
                                    {product.name}
                                </div>
                
                                <div className="product-rating-container">
                                    <img className="product-rating-stars"
                                    src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                                    <div className="product-rating-count link-primary">
                                    {product.rating.count}
                                    </div>
                                </div>
                
                                <div className="product-price">
                                    ${(product.priceCents / 100).toFixed(2)}
                                </div>
                
                                <div className="product-quantity-container">
                                    <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    </select>
                                </div>
                
                                <div className="product-spacer"></div>
                
                                <div className="added-to-cart">
                                    <img src="images/icons/checkmark.png" />
                                    Added
                                </div>
                
                                <button className="add-to-cart-button button-primary">
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })
                    
                }
                
            </>
        );
    }else{
        let skeletonLoadingBoxes =[];
        let numberOfSkeletonLoadingBoxes = 20;
        for(let i = 0 ; i < numberOfSkeletonLoadingBoxes ;++i){
            skeletonLoadingBoxes.push(i);
        }
        return(
            skeletonLoadingBoxes.map((skeletonLoadingBoxNumber)=>{
                return(
                    <div  className="product-container" key={skeletonLoadingBoxNumber}>
                        <div className="product-image-container">
                            <Skeleton width={220} height={180} />
                        </div>
            
                        <div className="product-name limit-text-to-2-lines">
                            <Skeleton count={1} />
                        </div>
        
                        <div className="product-rating-container">
                            <img className="product-rating-stars" />
                            <div className="product-rating-count link-primary">
                                <Skeleton count={1} />
                            </div>
                        </div>
        
                        <div className="product-price">
                            <Skeleton count={1} />
                        </div>
        
                        <div className="product-quantity-container">
                            <Skeleton count={1} />
                        </div>
        
                        <div className="product-spacer">
                            <Skeleton count={1} />
                        </div>
        
                        <div className="added-to-cart">
                            <img src="images/icons/checkmark.png" />
                            Added
                        </div>
        
                        <Skeleton count={1} />
                    </div>
                );
            })
        )
    }
}
export function HomePage({products}){
    let [text , setText] = useState('');
    return(
        <>
            <Header 
                setText = {setText}
                />

            <div className="home-page">
                <div className="products-grid">
                    <Products 
                        text = {text}
                        products={products}
                    />
                </div>
            </div>
        </>
    );
}
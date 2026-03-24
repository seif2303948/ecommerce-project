import { useState } from 'react';
import {  ProductsGrid } from './ProductsGrid.jsx';
import { LoadingHomePage } from './LoadingHomePage.jsx';
import  Header  from '../../components/Header.jsx'
import '../../css/home-page.css'

export function HomePage({products , loadCart , productsInCart}){
    let [text , setText] = useState('');
    
    if(products.length > 0){
        return(
            <>
                <Header 
                    setText = {setText}
                    productsInCart = {productsInCart}
                />
    
                <div className="home-page">
                    <div className="products-grid">
                        
                        <ProductsGrid
                            text = {text}
                            products={products}
                            loadCart={loadCart}
                        />
                    </div>
                </div>
            </>
        );
    }
    else{
        let numberOfSkeletonLoadingBoxes = 42;
        return(
            <>
                <Header 
                    setText = {setText}
                    productsInCart = {productsInCart}
                    />
    
                <div className="home-page">
                    <div className="products-grid">
                        
                        <LoadingHomePage numberOfSkeletonLoadingBoxes ={numberOfSkeletonLoadingBoxes}/>
                    </div>
                </div>
            </>
        );
    }
}
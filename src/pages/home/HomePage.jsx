import { useState } from 'react';
import { Products } from './ProductsGrid.jsx';
import { LoadingHomePage } from './LoadingHomePage.jsx';
import  Header  from '../../components/Header.jsx'
import '../../css/home-page.css'

export function HomePage({products}){
    let [text , setText] = useState('');
    if(products.length > 0){
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
    else{
        return(
            <>
                <Header 
                    setText = {setText}
                    />
    
                <div className="home-page">
                    <div className="products-grid">
                        
                        <LoadingHomePage />
                    </div>
                </div>
            </>
        );
    }
}
import { useState } from 'react';
import { Products } from './Products.jsx';
import  Header  from '../../components/Header.jsx'
import '../../css/home-page.css'

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
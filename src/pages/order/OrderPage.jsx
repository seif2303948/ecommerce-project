import { useState , useEffect } from 'react';
import { OrderGrid } from './OrderGrid.jsx';
import { LoadingOrderPage } from './LoadingOrderPage.jsx';
import  Header  from '../../components/Header.jsx'
import '../../css/orders.css'
export function OrderPage({productsInCart}){
    let [orderedProducts , setOrderedProducts] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(`/api/orders?expand=products`)
            .then((res)=> {
                if(!res.ok){
                    console.log(`HTTP error ! status ${res.status}`);
                }
                return res.json();
            })
            .then((products) => setOrderedProducts(products))
            .catch((error)=>{console.log(error)})
        },500)
    },[])
    if(orderedProducts.length > 0){
        return(
            <>
                <Header productsInCart={productsInCart}/>
                <OrderGrid orderedProducts={orderedProducts}/>
            </>
        );
    }
    else{
        return(
            <LoadingOrderPage/>
        );
    }
}
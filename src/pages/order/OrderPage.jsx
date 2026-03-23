import { useState , useEffect } from 'react';
import { OrderGrid } from './OrderGrid.jsx';
import { LoadingOrderPage } from './LoadingOrderPage.jsx';
import '../../css/orders.css'
export function OrderPage(){
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
            <OrderGrid orderedProducts={orderedProducts}/>
        );
    }
    else{
        return(
            <LoadingOrderPage/>
        );
    }
}
import { numberOfSkeletonLoadingBoxesFun } from '../../utils/loading.js';
import  Header  from '../../components/Header.jsx'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function LoadingOrderPage({numberOfSkeletonLoadingBoxes}){
let skeletonLoadingBoxes = numberOfSkeletonLoadingBoxesFun(numberOfSkeletonLoadingBoxes);
    return(
        <>
            <Header/>
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <div className="orders-grid">
                    {
                        skeletonLoadingBoxes.map((theNumberOfSkeletonLoadingBox) =>{
                            return(
                                <div className="order-container" key={theNumberOfSkeletonLoadingBox}>
                                    <div className="order-header">
                                        <Skeleton width={800} height={40} />
                                    </div>
                                    <div className="order-details-grid" >
                                        <div className="product-image-container">
                                            <Skeleton width={110} height={110} />
                                        </div>

                                        <div className="product-details">
                                        <div className="product-name">
                                            {
                                                <Skeleton width={330} height={20} />
                                            }
                                        </div>
                                        <div className="product-delivery-date">
                                            <Skeleton width={150} height={20} />
                                        </div>
                                        <div className="product-quantity">
                                            <Skeleton width={90} height={20} />
                                        </div>
                                            <Skeleton width={140} height={30} />
                                        </div>

                                        <div className="product-actions">
                                            <Skeleton width={220} height={35} />
                                        </div>
                                    </div>
                                    
                                </div>

                            )
                        })
                    }         
                </div>
            </div>
        </>
    );

}
import { numberOfSkeletonLoadingBoxesFun } from '../../utils/loading.js';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export function LoadingHomePage({numberOfSkeletonLoadingBoxes}){
    let skeletonLoadingBoxes = numberOfSkeletonLoadingBoxesFun(numberOfSkeletonLoadingBoxes);
    return(
        skeletonLoadingBoxes.map((skeletonLoadingBoxNumber)=>{
            return(
                <div  className="product-container" key={skeletonLoadingBoxNumber}>
                    <div className="product-image-container">
                        <Skeleton width={220} height={180} />
                    </div>
        
                    <div className="product-name limit-text-to-2-lines">
                        <Skeleton  />
                    </div>
    
                    <div className="product-rating-container">
                        <Skeleton width={100} height={20}/>
                    </div>
    
                    <div className="product-price">
                        <Skeleton  width={50}/>
                    </div>
    
                    <div className="product-quantity-container">
                        <Skeleton width={50} height={25} />
                    </div>
    
                    <div className="product-spacer">
                        
                    </div>
    
                    <div className="added-to-cart">
                        <img src="images/icons/checkmark.png" />
                        Added
                    </div>
                    <Skeleton width={220} height={30}/>
                    
                </div>
            );
        })
    )
}
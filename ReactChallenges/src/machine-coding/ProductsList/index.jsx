
import useFetchData from "../../hooks/useFetchData"
import styles from './styles.module.css';
// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

const Rating =()=>{
    return <>
    </>
}





const Product=({id,title,price,description,category,image,rating})=>{

    return <div className={styles.productItem}> 
            <div className={styles.productImage}>
                <img src={image}  alt={`${category}_image`}/>
            </div>
            <div className={styles.productTitle}>
                {title}
            </div>
                <div>
                    <div className={styles.productPrice}>
                            {price}
                            {/* <AddToCart product={product}/> */}
                    </div>
                </div>
            </div>
}


const ProductsList=()=>{
    const  {data,loading,error}=useFetchData('https://fakestoreapi.com/products',[])

    console.log(data)
    return <div className={styles.container}>
            <div className={styles.productListItems}>
                {data.map((product,i)=><Product {...product} key={i}/>)}
            </div>             
        </div>

}

export default ProductsList
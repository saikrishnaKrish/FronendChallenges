import styles from './styles.module.css'

const ProductCard=({id,title,price,description,category,image,rating})=>{
    
    return <div className={styles.card} key={id}>
            <div className={styles.cardDesc}>
                <p className={styles.category}>{category}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>{price} ₹ </p>
            {/* <Rating /> */}
                </div>
        <div className={styles.cardImg}> 
        <img src={image}  alt={`${category}_image`} className={styles.image}/>
        </div>
        </div>
}

export default ProductCard
import { Link } from 'react-router-dom'
import classes from './ProductsItem.module.css'

type ProductsItemProps = {
    id: number
    image: string
    category: string
    title: string
    fit: string
    price: string
}

const ProductsItem = ({id, image, category, title, fit, price}:ProductsItemProps) => {
    return (
        <div className={classes.products_item}>
            <div><img src={image} alt={`product${id}`} /></div>
            <div className='d-f jc-sb align-center'>
                <div className={classes.products_item_category}>{category}</div>
                <Link to={title === "Elegant Evening Gown" ? '/products-open' : ''} className={classes.products_item_shop}></Link>
            </div>
            <h3 className={classes.products_item_title}>{title}</h3>
            <div className="d-f align-center">
                <div className={classes.products_item_info}>
                    <div className={classes.info_title}>Fit</div>
                    <div><img src="/images/shape.png" alt="shape" /></div>
                    <div className={classes.info_value}>{fit}</div>
                </div>
                <div className={classes.products_item_info}>
                    <div className={classes.info_title}>Price</div>
                    <div><img src="/images/shape.png" alt="shape" /></div>
                    <div className={classes.info_value}>${price}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductsItem
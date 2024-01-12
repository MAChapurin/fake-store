import { useAppSelector } from "@/hooks";
import { ProductItemProps } from "../ProductList"
import { HeartIcon } from "@/ui";

import cn from "classnames"

import styles from './ProductItem.module.css'

export function ProductItem(props: ProductItemProps) {

  const { id, price, title, image, cb } = props

  const { favorites } = useAppSelector(state => state.products)

  const isLike = favorites.map(el => el.id).includes(id)

  return (
    <li key={id} className={styles.product}>
      <div className={styles.product__left}>
        <img className={styles.img} src={image} alt={title} />
      </div>
      <div className={styles.product__right}>
        <h3>{title}</h3>
        <span className={styles.product__price}><b>{price}$</b></span>
      </div>
      <button
        aria-label="button for your like"
        data-id={id} onClick={cb}
        className={cn(styles.product__like,
          {
            [styles.active]: isLike
          }
        )}>
        <HeartIcon className={styles.iconLike}/>
      </button>
    </li>
  )
}

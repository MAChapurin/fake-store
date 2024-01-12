import { ProductList } from '@/components'

import styles from './ProductsPage.module.css'
import { useAppSelector } from '@/hooks'

type CallbackType = {
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function ProductsPage({ cb }: CallbackType) {
  const { productsAll } = useAppSelector(state => state.products)
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>
        Products
      </h2>
      <ProductList list={productsAll} cb={cb} />
    </section>
  )
}

import { ProductList } from '@/components'

import styles from './FavoritesPage.module.css'
import { useAppSelector } from '@/hooks'

type CallbackType = {
  cb: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function FavoritesPage({ cb }: CallbackType) {
  const { favorites } = useAppSelector(state => state.products)
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>
        Favorites
      </h2>
      <ProductList list={favorites} cb={cb} />
    </section>
  )
}
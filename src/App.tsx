import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { addProduct, getProducts, removeProduct } from "./store/slices/productSlice"

import { Footer, Header, Main } from "@/components"
import { FavoritesPage, ProductsPage } from "@/pages"

import { useAppDispatch, useAppSelector } from "@/hooks"
import styles from './App.module.css'

function App() {
  const { productsAll, favorites } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const favoritesId = favorites.map(el => el.id)

  function handleClickLike(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target
    if (target !== undefined && target instanceof HTMLButtonElement && target.dataset) {
      const id = Number(target.dataset?.id)
      const favoritesObj = productsAll.find(el => el.id === id)
      if (favoritesObj && favoritesId.includes(favoritesObj.id)) {
        dispatch(removeProduct(id))
      } else {
        dispatch(addProduct(favoritesObj))
      }
    }
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<ProductsPage cb={handleClickLike} />} />
          <Route path='/fake-store/' element={<ProductsPage cb={handleClickLike} />} />
          <Route path='/favorites' element={<FavoritesPage cb={handleClickLike} />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  )
}

export default App

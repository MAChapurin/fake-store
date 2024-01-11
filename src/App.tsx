import { Header } from "@/components"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "./hooks"
import { products } from "./store/slices/productSlice"


function App() {

  const { productsAll } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(productsAll)
  }, [productsAll])

  useEffect(() => {
    dispatch(products())
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default App

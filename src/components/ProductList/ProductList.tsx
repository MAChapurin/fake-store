export interface ProductItemProps  {
  category: string
  description: string
  id: number
  image: string
  price: number
}

interface ProductListProps {
  list: ProductItemProps[]
}

export function ProductList({list}: ProductListProps) {
  return (
    <ul>
      {list.map((product)=> {
        return (
          <li key={product.id}>

          </li>
        )
      })}
    </ul>
  )
}

import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../CartContext"
import { getProductData } from "../productsStore"


export default function CartProduct(props) {
  const cart = useContext(CartContext)
  const id = props.product.id
  const quantity = props.product.quantity
  const productData = getProductData(id)

  return (
    <>
      <h5>{productData.title}</h5>
      <p>{quantity}</p>
      <p>${ (quantity * productData.price).toFixed(2) }</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
      <hr />
    </>
  )
}

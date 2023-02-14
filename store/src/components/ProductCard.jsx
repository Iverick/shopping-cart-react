import { useContext } from "react"
import { Card, Button, Form, Row, Col } from "react-bootstrap"
import { CartContext } from "../CartContext"

export default function ProductCard(props) {
  const product = props.product
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  const addOneToCart = () => cart.addOneToCart(product.id)
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        { productQuantity > 0
          ?
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                <Col sm="6" className="d-flex">
                  <Button sm="6" className="me-2" onClick={addOneToCart}>+</Button>
                  <Button sm="6" className="me-2" onClick={() => cart.removeOneFromCart(product.id)}>
                    -
                  </Button>
                </Col>
              </Form>
              <Button variant="danger" className="my-2" onClick={() => cart.deleteFromCart(product.id)}>
                Remove from cart
              </Button>
            </>
          :
            <Button variant="primary" onClick={addOneToCart}>Add To Cart</Button>
        }
      </Card.Body>
    </Card>
  )
}

import { useContext, useState } from 'react'
import { Button, Navbar, Modal } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { STRIPE_CHECKOUT_URL } from '../constants'
import CartProduct from './CartProduct'

export default function NavbarContainer() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)
  const cart = useContext(CartContext)
  const cartProductsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const checkout = async () => {
    await fetch(STRIPE_CHECKOUT_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.url) window.location.assign(res.url)
    })
  }

  return(
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleOpen}>Cart ({cartProductsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProductsCount > 0
            ?
              <>
                <p>Items in your cart:</p>
                {cart.items.map((product, idx) => (
                  <CartProduct key={idx} product={product} />
                ))}
                <h3>Total: {cart.getTotalCost().toFixed(2)}</h3>

                <Button variant="success" onClick={checkout}>Purchase</Button>
              </>
            :
              <h3>There are no items in your cart</h3>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

import { Row, Col } from "react-bootstrap"
import ProductCard from "../components/ProductCard"
import { productsArray } from "../productsStore"

export default function Store() {
  return (
    <>
      <h1 align="center" className="p-3">Welcome To The Store!</h1>
      <Row xs={1} md={3} className="g-4">
        { productsArray.map((product, index) => (
          <Col key={index} align="center">
            <ProductCard product={product} />
          </Col>
        )) }
      </Row>
    </>
  )
}

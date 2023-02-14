import { CAMERA_STRIPE_ID, COFFEE_STRIPE_ID, SUNGLASSES_STRIPE_ID } from "./constants"

const productsArray = [
  {
    id: COFFEE_STRIPE_ID,
    title: "Coffee",
    price: 4.99
  },
  {
    id: SUNGLASSES_STRIPE_ID,
    title: "Sunglasses",
    price: 9.99
  },
  {
    id: CAMERA_STRIPE_ID,
    title: "Camera",
    price: 39.99
  }
]

const getProductData = id => {
  let productData = productsArray.find(product => product.id === id)

  if (!productData) {
    console.log("Product data does not exist for ID: " + id)
    return
  }

  return productData
}

export { productsArray, getProductData }

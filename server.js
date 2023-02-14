const express = require("express")
require("dotenv").config()
const cors = require("cors")
const { SUCCESS_URL, CANCEL_URL } = require("./constants")
const stripe = require("stripe")(process.env.STRIPE_SECRET)
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async(req, res) => {
  console.log(req.body)
  const items = req.body.items
  let lineItems = []
  items.forEach(item => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity
    })
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: SUCCESS_URL,
    cancel_url: CANCEL_URL,
  })

  res.send(JSON.stringify({
    url: session.url
  }))
})

app.listen(port, () => console.log(`Listening on port ${port}!`))

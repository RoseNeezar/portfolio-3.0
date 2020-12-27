const express = require("express")
const compression = require("compression")
const path = require("path")
const app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, "public")))

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})
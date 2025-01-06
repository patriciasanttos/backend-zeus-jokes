import express from "express"
import cors from "cors"
import {piadas} from "./mock.js"

const app = express()
app.use(
  cors(
    {
      exposeHeaders: ["X-Total-Count"]
    }
  )
)
app.use(express.json())

function getRandomIt(max) {
  return Math.floor(Math.random() * max)
}

app.get("/batata", (request, response) => {
  return response.status(200).send({batata: true})
})

app.get("/piadas", (request, response) => {
  const randomNum = getRandomIt(piadas.length)
  return response.status(200).send({piada: piadas[randomNum]})
})

app.listen("3000")

export default app
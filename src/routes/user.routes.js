import { Router, response } from "express";

const usersRoutes = Router()

usersRoutes.post('/', (req, res) => {
  const { id, name, email, password } = req.body

  response.json({id, name, email, password})
})

export default usersRoutes
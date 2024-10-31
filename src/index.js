require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const categoriesRoutes = require('./routes/categories')
const productsRoutes = require('./routes/products')
const anagramsRoutes = require('./routes/anagrams')
const scheduleTasksRoutes = require('./routes/schedule-tasks')

const middlewareLogRequest = require('./middleware/logs')

const app = express();

app.use(middlewareLogRequest)
app.use(express.json())

// app.use("/", (req, res, next) => {
//     res.send("Hello World")
// })

// app.post("/", (req, res) => {
//     res.send("Hello World - POST")
// })

app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)
app.use('/anagrams', anagramsRoutes)
app.use('/schedule-tasks', scheduleTasksRoutes)

app.post("/", (req, res) => {
    res.json({
        name : "Sidik Imam Setiyawan",
        email : "sidikimamsetiyawan@gmail.com"
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`)
})
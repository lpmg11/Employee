const express = require("express")
const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// routes
app.use(require('./routes/index'))

const port = process.env.PORT || 3010;

app.listen(port, console.log(`Server is running on http://localhost:${port}`))
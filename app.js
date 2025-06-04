const express = require('express');
const app = express();
const PORT = 3000;
const taskRoutes = require('./routes/tasks')

app.use(express.json());

app.use("/tasks" ,taskRoutes );

app.listen(PORT , ()=> {
    console.log(`port : ${PORT}`);
})
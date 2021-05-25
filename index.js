const Express = require('express');
const path = require('path');


const app = Express();
const port = 3000;

const staticPath = path.join(__dirname, './public');

app.use(Express.static(staticPath));


app.get('/', (req, res) => {
    res.send("lol")
})

app.listen(port, () => console.log("listening on " + port));
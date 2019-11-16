const express = require ('express');
const path = require ('path');
const moment = require ('moment');
const members = require ('./Members');

const app = express();


const logger = ( req,res,next) => {
    console.log(`${req.protocol}:// ${req.get('host')}${req.originalUrl} :${moment().format()} :${req.originalIp}`);
    console.dir(req.ip);
    next();
}

//initialise middleware
app.use(logger);

//Gets all members
app.get('/api/members', (req,res) => {
    res.json(members);
});
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
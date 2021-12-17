const express = require('express');
const app = express();

const port = 3000;

const agentRouter = require('./routes/agent.router');
const propertyRouter = require('./routes/property.router');

app.use(express.json());

app.use('/agents', agentRouter);
app.use('/property', propertyRouter);

app.listen( port, () => {})

module.exports = app;
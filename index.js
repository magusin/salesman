const express = require('express');
const app = express();

const port = 3000;

const agentRouter = require('./route/agent.router');
const propertyRouter = require('./route/property.router');

app.use(express.json());

app.use('/agents', agentRouter);
app.use('/property', propertyRouter);

app.listen( port, () => {})

module.exports = app;
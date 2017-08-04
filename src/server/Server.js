const express = require('express'),
    path = require('path'),

    app = express(),
    port = process.env.PORT || 3000;
// MONGODB = process.env.MONGOLAB_URI || 'mongodb://localhost/frameware_records',
// mongoose = require('mongoose'),
// Task = require('../api/model/Records')

// mongoose.Promise = global.Promise;
// mongoose.connect(MONGODB);

// console.log('MongoDB connecting to remote URI: ' + MONGODB);


app.use('/static', express.static(path.resolve(__dirname, '/../../build')));


app.listen(port, () => {
    console.log('FrameWareIO server started on: ' + port);
});
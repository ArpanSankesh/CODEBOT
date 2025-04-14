const mongoose = require('mongoose');

const mongo_url = process.env.MONGODB_CONNENTION;

mongoose.connect(mongo_url).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.log('MongoDB connection failed', err);
    
})
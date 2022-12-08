const express = require('express');
const path = require('path');
const app = express();
const port = 8001;





app.listen(port, function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Yup! My server is running on port:", port);
});
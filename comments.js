// Create web server
// 1. Create web server
// 2. Create router
// 3. Create handler
// 4. Start the server
// 5. Test it out

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create router
const comments = require('./comments.js');
app.use('/comments', comments);

// 4. Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
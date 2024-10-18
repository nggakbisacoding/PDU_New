const express = require('express');
const app = express();
const port = 3000;

async function setupRoutes() {
    const { default: ss } = await import('../app/router/basic.js');
    app.get('/', ss);
}

setupRoutes().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
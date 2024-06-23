// server.js
const express = require('express');
const cors = require('cors'); // Import CORS package
const appRoute = require('./routes/route.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173' // Your frontend URL
}));

/** routes */
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json());

// Sample route
app.get('/products', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Sample Product', price: 20 }]);
});

// Export `app` separately for testing
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;


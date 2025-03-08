const getProducts = (req, res) => {
    // Fetch products from database (mocked here)
    res.send('Getting products');
};

const createProduct = (req, res) => {
    // Create product logic
    res.send('Product created');
};

const updateProduct = (req, res) => {
    // Update product logic
    res.send(`Product ${req.params.id} updated`);
};

const deleteProduct = (req, res) => {
    // Delete product logic
    res.send(`Product ${req.params.id} deleted`);
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };

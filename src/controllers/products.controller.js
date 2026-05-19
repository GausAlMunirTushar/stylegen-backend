const getAllProducts = (req, res) => {
    const products = [
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 5.99 },
    ]
    res.json({
        success: true,
        data: products,
        message: "Products retrieved successfully",
        hello: "Hello from products controller"
    })
}

export { getAllProducts }
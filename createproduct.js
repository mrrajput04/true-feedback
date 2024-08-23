require('dotenv').config();
const axios = require('axios');

// Retrieve Shopify credentials from environment variables
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_PASSWORD = process.env.SHOPIFY_API_PASSWORD;
const SHOPIFY_SHOP_NAME = process.env.SHOPIFY_SHOP_NAME;

// Shopify API endpoint for creating products
const SHOPIFY_API_URL = `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_SHOP_NAME}/admin/api/2024-07/products.json`;

// Function to create a product
const createProduct = async () => {
    try {
        const response = await axios.post(SHOPIFY_API_URL, {
            product: {
                title: "New Product",
                body_html: "<strong>Good product!</strong>",
                vendor: "Vendor Name",
                product_type: "Type",
                variants: [
                    {
                        option1: "First",
                        price: "19.99",
                        sku: "123"
                    }
                ]
            }
        });
        console.log('Product created successfully:', response.data);
    } catch (error) {
        console.error('Error creating product:', error.response ? error.response.data : error.message);
    }
};

// Run the function
createProduct();

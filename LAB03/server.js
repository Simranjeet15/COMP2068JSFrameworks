// Import required packages
const connect = require('connect');
const url = require('url');

// Create calculate function
function calculate(req, res, next) {
    // Parse the URL for parameters
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    // Check if method is valid
    if (["add", "subtract", "multiply", "divide"].includes(method)) {
        let result;
        // Perform the math operation based on method
        switch (method) {
            case "add":
                result = x + y;
                break;
            case "subtract":
                result = x - y;
                break;
            case "multiply":
                result = x * y;
                break;
            case "divide":
                result = x / y;
                break;
        }
        // Display the full math operation and result on the page
        res.end(`${x} ${method} ${y} = ${result}`);
    } else {
        // Show error message if method is invalid
        res.end("Error: Invalid method. Please use 'add', 'subtract', 'multiply', or 'divide'.");
    }
}

// Create a Connect app
const app = connect();

// Use the calculate function as middleware
app.use('/calculate', calculate);

// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));

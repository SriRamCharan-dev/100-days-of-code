const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error ";
    // Invalid mongodb id
    if (err.name == "CastError") {
        statusCode = 400;
        message = "Invalid Rxpense Id format"
    }
    //schema error 
    if (err.name == "ValidationError") {
        statusCode = 400;
    }

    res.status(statusCode).json({
        sucess: false,
        message: message
    });
};

module.exports = globalErrorHandler;
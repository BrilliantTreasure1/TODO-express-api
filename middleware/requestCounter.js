let requestCount = 0;

const requestCounter = (req , res , next) => {
    requestCount++;
    console.log(`Total requests so far: ${requestCount}`);
    next();
}

module.exports = requestCounter;
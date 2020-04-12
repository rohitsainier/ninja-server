const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    message:'you have reached the max limit please try after some time',
    max: 5 // limit each IP to 5 requests per windowMs
  });
   
  module.exports = {
      limit:limiter
  }
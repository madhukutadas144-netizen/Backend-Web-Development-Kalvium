'use strict';
// middleware/rateLimiter.js

const rateLimit = require('express-rate-limit');

// In a multi-instance deployment, a Redis-backed store such as
// rate-limit-redis allows all server instances to share rate-limit counters.
// The default in-memory store keeps counters separately in each instance,
// so requests spread across instances can bypass the intended limit.

module.exports = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Maximum 5 attempts per IP
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true
});
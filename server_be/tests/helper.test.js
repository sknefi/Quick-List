// tests/event/helper.js
const axios = require('axios');

const BASE_URL = 'http://localhost:3001';
const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9tdWx1cyIsInN1cm5hbWUiOiJhdWd1c3R1cyIsInBob3RvIjoicGhvdG8xIiwiaWF0IjoxNzM0MTg5ODc3LCJleHAiOjE3MzQxOTI1Nzd9.gwwY1C2s_PL1qKcMbW2QVQEWQAzCqHjHra3T1bLeuYA'
const config = {
  headers: {
    Authorization: accessToken,
    'Content-Type': 'application/json',
  },
};

module.exports = { axios, BASE_URL, config };

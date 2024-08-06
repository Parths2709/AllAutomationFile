// @ts-check
const { defineConfig, devices, expect } = require('@playwright/test');

const config = {
  testDir: './tests',
  // Maximum time one test cases can run
  timeout: 30* 1000,
  expect: 
    {
      timeout: 5000
    },
  reporter: 'html',    
  use: 
    {
      broswerName: "chromium"
    }
};

module.exports = config;
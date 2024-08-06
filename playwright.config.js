// @ts-check
const { defineConfig, devices, expect } = require('@playwright/test');
 
const config = {
  testDir: './Playwright_Automation',
  //retries: 2,
  // Maximum time one test cases can run
  timeout: 50* 1000,
  expect:
    {
      timeout: 6000
    },
  reporter: 'html',    
  use:
    {
      browserName: 'chromium',
      //...devices['Desktop Firefox'],
      headless: false,
      screenshot: 'on',
      trace: 'on',
    }
    
};
// projects: [
//   // {
//   //   name: 'chromium',
//   //   use: { ...devices['Desktop Chrome'] },
//   // },

//   {
//     name: 'firefox',
//     use: { ...devices['Desktop Firefox'] },
//   },
// ]

 
module.exports = config;
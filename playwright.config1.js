// @ts-check
const { defineConfig, devices, expect } = require('@playwright/test');
 
const config = {
  testDir: './tests',
  // Maximum time one test cases can run
  timeout: 50* 1000,
  expect:
    {
      timeout: 5000
    },
  reporter: 'html',    
  project:
  [
    {
      name: 'Safari',
      use:
      {
        browserName: 'webKit',
        //...devices['Desktop Firefox'],
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    },
    {
      name: 'chrome',
      use:
      {
        browserName: 'chromium',
        //...devices['Desktop Firefox'],
        video: 'retain-on-failure',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        ...devices['Pixel 7']
      }
    },
    {
      name: 'chrome',
      use:
      {
        browserName: 'firefox',
        //...devices['Desktop Firefox'],
        headless: false,
        screenshot: 'on',
        trace: 'on',
      }
    }

  ]

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
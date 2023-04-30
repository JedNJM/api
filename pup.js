// Require puppeteer library
const puppeteer = require("puppeteer");

// Define async function
(async () => {
  // Launch browser
  const browser = await puppeteer.launch({ headless: false });
  // Create new page
  const page = await browser.newPage();
  // Set viewport  
  await page.setViewport({ width: 1280, height: 800 });
  // Go to LinkedIn website
  await page.goto("https://www.linkedin.com/");
  // Wait for sign in button to appear
  await page.waitForSelector(".nav__button-secondary");
  // Click on sign in button
  await page.click(".nav__button-secondary");
  // Wait for email input to appear
  await page.waitForSelector("#username");
  // Type your email
  await page.type("#username", "your_email_here");
  // Wait for password input to appear
  await page.waitForSelector("#password");
  // Type your password
  await page.type("#password", "your_password_here");
  // Wait for sign in button to appear
  await page.waitForSelector(".btn__primary--large");
  // Click on sign in button
  await page.click(".btn__primary--large");
  
  // Now you are logged in and can scrape any profile you want
  
  // For example, let's scrape Google's company profile
  
  // Go to Google's company profile URL
  await page.goto("https://www.linkedin.com/company/google/");
  
  // Wait for company name element to appear
  await page.waitForSelector(".org-top-card-summary__title");
  
  // Get company name text content
  const companyName = await page.$eval(
    ".org-top-card-summary__title",
    (el) => el.textContent.trim()
    );
    
    // Print company name
    console.log("Company name:", companyName);
    
    // You can scrape other data such as followers, description, website, etc. using similar methods
    
    // Close browser when done
    await browser.close();
})();
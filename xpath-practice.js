const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
//const chrome = require("selenium-webdriver/chrome");  // We can we it for different browser

const productName = "Nike react phantom run flyknit 2"; // We can use this for many field
async function testRun() 
{
 //   let driver = await new Builder().forBrowser("chrome").build();
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
 //   await driver.manage().window().fullscreen(); 
    await driver.manage().window().maximize(); // or maximize() better compability
    await driver.get("https://demo.evershop.io/");
    //await driver.sleep(1000); // 1 Sec wait
    //await driver.findElement(By.className("search-icon")).click();  // By ClassName
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("nike");
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath(`//a[contains(@href, '182')]/span[contains(text(),'${productName}')]`)).click();
    await driver.findElement(By.xpath(`//a[@href="#" and contains(text(),"S")]`)).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//a[@href="#" and contains(text(),"Black")]`)).click();
    await driver.sleep(2000);
   // await driver.findElement(By.xpath("//input [@name='qty']")).sendKeys(2);
    await driver.findElement(By.xpath("//input [@name='qty']")).clear(); //CLear Previous Value
    await driver.findElement(By.xpath("//input [@name='qty']")).sendKeys(2); 
    await driver.findElement(By.xpath("//button[contains(.,'ADD TO CART')]")).click();
   // await driver.findElement(By.xpath("//span[contains(text(),'ADD TO CART')]")).click(); // we can select by text
    await driver.sleep(2000); // Wait for View cart Action
    await driver.findElement(By.xpath("//a[@class='add-cart-popup-button']")).click(); 

    await driver.sleep(3000); // 3 Sec wait
    await driver.quit();
}

testRun();

var webdriver=require('selenium-webdriver');
var By=require('selenium-webdriver').By;
var until=require('selenium-webdriver').until;

//this requires to include the mocha describe,each.....
var test = require('selenium-webdriver/testing');

var fs=require('fs');

var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();


test.describe( 'Test' , function(){

    test.beforeEach(function(){
        this.timeout(50000); 
    
        driver.get('https://staging.keela.co/login');
        
    });
 
    test.afterEach(function(){
        driver.quit();
    });
 
    test.it( 'Test Case' , function(){
    this.timeout(50000);
  setTimeout(done, 4000);
        // driver.findElement(webdriver.By.xpath('//*[@id="login-email"]')).then(function(title){
        //     title.sendKeys("bandana@yopmail.com");

     driver.wait(until.elementLocated(By.name('login-email'))).then(function(email){
     email.sendKeys('bandanakeela@gmail.com');

     driver.wait(until.elementLocated(By.name('login-password'))).then(function(pw){
     pw.sendKeys('123456789');
        });

     driver.findElement(webdriver.By.linkText("Log In")).click();
    
        });
    });

});








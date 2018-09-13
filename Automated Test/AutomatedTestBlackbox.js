var assert = require('assert'),
  fs = require('fs'),
  By = require('selenium-webdriver').By,
  until = require('selenium-webdriver').until;
  webdriver = require('selenium-webdriver'),
  test = require('selenium-webdriver/testing');
test.describe('PRESSINGGAME', function(){
  this.timeout(15000);
  var driver;
  test.before(function(){
    driver = new
    webdriver.Builder().withCapabilities({
      browserName : 'chrome',
    'chromeOptions': {
        args: ['test-type']
    }
  }).usingServer('http://localhost:4444/wd/hub').build();
  });
  test.it('Delete a vertex',function(){
    driver.get('https://s3.amazonaws.com/pressing-game/index.htm');
    driver.findElement(By.xpath('//*[@id="bknd"]')).click();
    var vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    driver.actions().
      mouseMove(vertex, {x:Number('150'),y:Number('150')}).
      mouseDown().
      mouseUp().
      mouseMove(vertex, {x:Number('150'),y:Number('150')}).
      mouseDown().
      mouseUp().
      mouseMove(vertex).
      mouseDown().
      mouseUp().
      perform();
    var edge = driver.findElement(By.xpath("//*[starts-with(@id, 'edge-')]"));
    edge.getAttribute('stroke')
      .then(function(stroke){
        assert.equal(stroke, '#ffffff');
      });
    driver.findElement(By.xpath('//*[@id="reset_text"]')).click();
    });
  test.it('Redo', function(){
    driver.findElement(By.xpath('//*[@id="bknd"]')).click();
    driver.findElement(By.xpath('//*[@id="back_text"]')).click();
    driver.findElement(By.xpath('//*[@id="forward_text"]')).click();
    var vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.getAttribute('stroke')
    .then(function(stroke){
      assert.equal(stroke, '#ffffff');
      });
    driver.findElement(By.xpath('//*[@id="reset_text"]')).click();
  });
  test.it('Change the color of the vertex', function(){
    driver.findElement(By.xpath('//*[@id="bknd"]')).click();
    driver.findElement(By.xpath('//*[@id="color_text"]')).click();
    var vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.click();
    vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.getAttribute('fill')
    .then(function(fill){
      assert.equal(fill, '#ffffff');
      }); 
  });
  test.it('Change to play mode', function(){
    driver.findElement(By.xpath('//*[@id="reset_text"]')).click();
    driver.findElement(By.xpath('//*[@id="bknd"]')).click();
    driver.findElement(By.xpath('//*[@id="mode_mg_text"]')).click();
    var vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.click();
    vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.getAttribute('fill')
    .then(function(fill){
      assert.equal(fill, '#ffffff');
      });
    driver.findElement(By.xpath('//*[@id="reset_text"]')).click();
  });
test.it('Make sure the color button changes when click', function(){
    driver.findElement(By.xpath('//*[@id="color_text"]')).click();
    driver.findElement(By.xpath('//*[@id="bknd"]')).click();
    var vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.getAttribute('fill')
    .then(function(fill){
      assert.equal(fill, '#ffffff');
    });
    driver.findElement(By.xpath('//*[@id="reset_text"]')).click();
  });
  
 });
  test.after(function(){
    //driver.quit();
  });


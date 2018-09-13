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
  test.it('Make a vertex', function(){
    driver.get('https://s3.amazonaws.com/pressing-game/index.htm');
    driver.findElement(By.id('bknd')).click();
    var vertex = driver.findElement(By.xpath("//*[starts-with(@id, 'vertex-')]"));
    vertex.getAttribute('id')
    .then(function(id){
      console.log(id);
      });
    vertex.getAttribute('stroke')
    .then(function(stroke){
      assert.equal(stroke, '#ffffff');
      });
  });
  test.it('Make an edge',function(){
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
    });
 });
  test.after(function(){
    //driver.quit();
  });
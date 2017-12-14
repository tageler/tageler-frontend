import { browser, element, by, protractor } from 'protractor';

var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

export class TagelerPage {
  navigateTo() {
    browser.get('/');
    browser.waitForAngular();
    return browser;
  }

  getFirstListElement(){
    return element.all(by.css('app-root li')).first().getText();
  }

  getSecondListElement(){
    return element.all(by.css('app-root li')).get(1).getText();
  }

  getFirstTitleElement(){
    return element.all(by.css('app-root a')).first().getText();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getParagraphForGroups(){
    return element(by.css('app-root h2')).getText();
  }

  getFirstGroupName(){
    return element.all(by.css('.container h4')).first().getText();
  }

  getSecondGroupName(){
    return element.all(by.css('.container h4')).get(1).getText();
  }

  getThirdGroupName(){
    return element.all(by.css('.container h4')).get(2).getText();
  }
}

export class AdminPage{

  navigateToAdminPage() {
    browser.get('/tageler/admin');
    browser.waitForAngular();
    return browser;
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getButtons(){
    return element(by.css('.btn.btn-primary')).isPresent();
  }

  getThirButton(){
    return element.all(by.css('.btn.btn-primary')).get(2).isPresent();
  }

  getFourthButton(){
    return element.all(by.css('.btn.btn-primary')).get(3).isPresent();
  }

  getFithtButton(){
    return element.all(by.css('.btn.btn-primary')).get(4).isPresent();
  }
}

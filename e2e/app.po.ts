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
}

export class TagelerDetailPage{
  navigateToTagelerDetailPage(){
    browser.get('/tageler-details');
    browser.waitForAngular();
    return browser;
  }

  navigateToSpecificDetailPage(){
    browser.get('/tageler-details/58e3a16e9e1be60ef209a62b');
    browser.waitForAngular();
    return browser;
  }

  getTitle(){
    return element(by.css('h1')).getText();
  }

  getSpecificTagelerTitle(){
    return element(by.css('h2')).getText();
  }

  getTagelerText(){
    return element(by.css('p')).getText();
  }

  getElementOfh4Tag(){
    return element(by.css('h4')).getText();
  }
}

export class GroupDetailsPage{
  navigateToSpecificGroupPage(){
    browser.get('/group/58f36c9885b29e0c261106b0');
    browser.waitForAngular();
    return browser;
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getGroupTitle(){
    return element(by.css('h3')).getText()
  }

  getElementOfh4Tag(){
    return element(by.css('h4')).getText();
  }
}

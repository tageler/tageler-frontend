import { browser, element, by } from 'protractor';

export class TagelerPage {
  navigateTo() {
    return browser.get('/');
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
    return browser.get('/tageler/admin');
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
    return browser.get('/tageler-details');
  }

  navigateToSpecificDetailPage(){
    return browser.get('/tageler-details/58e3a16e9e1be60ef209a62b');
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
    return browser.get('/group/58f36c9885b29e0c261106b0');
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

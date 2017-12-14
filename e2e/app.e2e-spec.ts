import { TagelerPage, AdminPage, } from './app.po';

describe('tageler App', () => {
  let page: TagelerPage;

  beforeEach(() => {
    page = new TagelerPage();
  });

  it('should display Tageler in a tag', () =>{
    page.navigateTo();
    expect(page.getFirstTitleElement()).toEqual('Tageler');
  });

  it('should display Home in li tag', () =>{
    page.navigateTo();
    expect(page.getFirstListElement()).toEqual('Home');
  });

  it('should display Übersicht Tageler in li tag', () =>{
    page.navigateTo();
    expect(page.getFirstListElement()).toEqual('Home');
  });

  it('should display Gruppen in h2 tag', () =>{
    page.navigateTo();
    expect(page.getSecondListElement()).toEqual('Übersicht Tageler');
  });

  it('should display Trupp in h4 tag', () =>{
    page.navigateTo();
    expect(page.getFirstGroupName()).toEqual('Trupp');
  });

  it('should display Meute in h4 tag', () =>{
    page.navigateTo();
    expect(page.getSecondGroupName()).toEqual('Meute');
  });

  it('should display Equipe in h4 tag', () =>{
    page.navigateTo();
    expect(page.getThirdGroupName()).toEqual('Equipe');
  });
});

describe('tageler Admin', () => {
  let adminPage: AdminPage;

  beforeEach(function() {
    adminPage = new AdminPage;
  });

  it('Tageler erstellen button should exist', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getButtons()).toBeTruthy();
  });

  it('Abbrechen button should exist', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getButtons()).toBeTruthy();
  });

  it('Gruppen anzeigen erstellen button should exist', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getButtons()).toBeTruthy();
  });

  it('Ansicht schliessen button should exist', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getButtons()).toBeTruthy();
  });

  it('Auswahl aufheben button should exist', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getButtons()).toBeTruthy();
  });

});

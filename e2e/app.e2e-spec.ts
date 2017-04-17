import { TagelerPage, AdminPage, TagelerDetailPage, GroupDetailsPage } from './app.po';

describe('tageler App', () => {
  let page: TagelerPage;

  beforeEach(() => {
    page = new TagelerPage();
  });

  it('should display message saying Willkommen zum neuen Tageler-System!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Willkommen zum neuen Tageler-System!');
  });

  it('should display Gruppen in h2 tag', () =>{
    page.navigateTo();
    expect(page.getParagraphForGroups()).toEqual('Gruppen');
  })

  it('should display Trupp in h4 tag', () =>{
    page.navigateTo();
    expect(page.getFirstGroupName()).toEqual('Trupp');
  })

  it('should display Meute in h4 tag', () =>{
    page.navigateTo();
    expect(page.getSecondGroupName()).toEqual('Meute');
  })

  it('should display Equipe in h4 tag', () =>{
    page.navigateTo();
    expect(page.getThirdGroupName()).toEqual('Equipe');
  })
});

describe('tageler Admin', () => {
  let adminPage: AdminPage;

  beforeEach(function() {
    adminPage = new AdminPage;
  });

  it('same h1 tag as in Index page', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getParagraphText()).toEqual('Willkommen zum neuen Tageler-System!');
  });

  it('Tageler erstellen button should exist', () => {
    adminPage.navigateToAdminPage();
    expect(adminPage.getButtons()).toBeTruthy();
  })

});


describe('tageler Detail-Page', () => {
  let tagelerDetailPage: TagelerDetailPage;

  beforeEach(function () {
    tagelerDetailPage = new TagelerDetailPage;
    tagelerDetailPage.navigateToTagelerDetailPage();
  });

  it('same h1 tag as in Index page', () => {
    expect(tagelerDetailPage.getTitle()).toEqual('Willkommen zum neuen Tageler-System!');
  });
});

describe('specific Tageler-Detail Page', () => {
  let tagelerDetailPage: TagelerDetailPage;

  beforeEach(function () {
    tagelerDetailPage = new TagelerDetailPage();
  })

  it('same h1 tag as in Index page', () => {
    tagelerDetailPage.navigateToSpecificDetailPage();
    expect(tagelerDetailPage.getTitle()).toEqual('Willkommen zum neuen Tageler-System!');
  });

  it('should display titel Fürla in h2 tag', () => {
    tagelerDetailPage.navigateToSpecificDetailPage();
    expect(tagelerDetailPage.getSpecificTagelerTitle()).toEqual('Fürlä');
  })

  it('tageler Text should be in p element and text should be adsfdg', () => {
    tagelerDetailPage.navigateToSpecificDetailPage();
    expect(tagelerDetailPage.getTagelerText()).toEqual('adsfdg');
  })

  it('should display Wichtig-Abmeldung in h4 tag', ()=> {
    tagelerDetailPage.navigateToSpecificDetailPage();
    expect(tagelerDetailPage.getElementOfh4Tag()).toEqual('Wichtig-Abmeldung');
  })
});

describe('Grouppage', () => {
  let groupDetailsPage: GroupDetailsPage;

  beforeEach(function() {
    groupDetailsPage = new GroupDetailsPage;
  });

  it('same h1 tag as in Index page', () => {
    groupDetailsPage.navigateToSpecificGroupPage();
    expect(groupDetailsPage.getParagraphText()).toEqual('Willkommen zum neuen Tageler-System!');
  });

  it('should display Tagelers of Obsidian', () => {
    groupDetailsPage.navigateToSpecificGroupPage();
    expect(groupDetailsPage.getGroupTitle()).toEqual('Tagelers of Obsidian');
  })

  it('should display Wichtig-Abmeldung in h4 tag', ()=> {
    groupDetailsPage.navigateToSpecificGroupPage();
    expect(groupDetailsPage.getElementOfh4Tag()).toEqual('Wichtig-Abmeldung');
  })
});

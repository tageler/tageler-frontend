import { TagelerPage } from './app.po';

describe('tageler App', () => {
  let page: TagelerPage;

  beforeEach(() => {
    page = new TagelerPage();
  });

  it('should display message saying Willkommen zum neuen Tageler-System!', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Willkommen zum neuen Tageler-System!');
  });
});

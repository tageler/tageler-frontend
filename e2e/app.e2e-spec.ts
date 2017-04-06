import { TagelerPage } from './app.po';

describe('tageler App', () => {
  let page: TagelerPage;

  beforeEach(() => {
    page = new TagelerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

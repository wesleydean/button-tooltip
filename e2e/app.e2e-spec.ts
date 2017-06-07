import { CCTestPage } from './app.po';

describe('cc-test App', () => {
  let page: CCTestPage;

  beforeEach(() => {
    page = new CCTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

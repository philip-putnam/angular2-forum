import { ChaiseedLattePage } from './app.po';

describe('chaiseed-latte App', () => {
  let page: ChaiseedLattePage;

  beforeEach(() => {
    page = new ChaiseedLattePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

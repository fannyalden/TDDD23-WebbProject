import { AWebbPage } from './app.po';

describe('a-webb App', () => {
  let page: AWebbPage;

  beforeEach(() => {
    page = new AWebbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

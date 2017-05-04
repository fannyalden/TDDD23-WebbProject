import { AngularsrcPage } from './app.po';

describe('angularsrc App', function() {
  let page: AngularsrcPage;

  beforeEach(() => {
    page = new AngularsrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

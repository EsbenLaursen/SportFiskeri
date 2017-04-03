import { SportFiskeriPage } from './app.po';

describe('sport-fiskeri App', () => {
  let page: SportFiskeriPage;

  beforeEach(() => {
    page = new SportFiskeriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

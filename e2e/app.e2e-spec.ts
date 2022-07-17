import { DsAppPage } from './app.po';

describe('ds-app App', () => {
  let page: DsAppPage;

  beforeEach(() => {
    page = new DsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

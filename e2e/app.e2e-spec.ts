import { FirebootcampNgPage } from './app.po';

describe('firebootcamp-ng App', function() {
  let page: FirebootcampNgPage;

  beforeEach(() => {
    page = new FirebootcampNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

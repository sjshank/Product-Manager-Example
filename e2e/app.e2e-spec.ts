import { ProductManagerAngular2Page } from './app.po';

describe('product-manager-angular2 App', function() {
  let page: ProductManagerAngular2Page;

  beforeEach(() => {
    page = new ProductManagerAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

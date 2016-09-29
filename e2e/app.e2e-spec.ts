import { ToolPage } from './app.po';

describe('tool App', function() {
  let page: ToolPage;

  beforeEach(() => {
    page = new ToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

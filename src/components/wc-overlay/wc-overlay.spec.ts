import { TestWindow } from '@stencil/core/testing';
import { WcOverlay } from './wc-overlay';

describe('wc-overlay', () => {
  it('should build', () => {
    expect(new WcOverlay()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLWcOverlayElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [WcOverlay],
        html: '<wc-overlay>' 
          + '</wc-overlay>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});

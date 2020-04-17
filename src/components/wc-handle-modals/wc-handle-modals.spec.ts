import { TestWindow } from '@stencil/core/testing';
import { WcHandleModals } from './wc-handle-modals';

describe('wc-handle-modals', () => {
  it('should build', () => {
    expect(new WcHandleModals()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLWcHandleModalsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [WcHandleModals],
        html: '<wc-handle-modals>' 
          + '</wc-handle-modals>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});

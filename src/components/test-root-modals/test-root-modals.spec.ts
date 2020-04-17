import { TestWindow } from '@stencil/core/testing';
import { TestRootModals } from './test-root-modals';

describe('test-root-modals', () => {
  it('should build', () => {
    expect(new TestRootModals()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTestRootModalsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TestRootModals],
        html: '<test-root-modals>' 
          + '</test-root-modals>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});

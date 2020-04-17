import { TestWindow } from '@stencil/core/testing';
import { TestModal } from './test-modal';

describe('test-modal', () => {
  it('should build', () => {
    expect(new TestModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTestModalElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TestModal],
        html: '<test-modal>' 
          + '</test-modal>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});

import { Component, h } from '@stencil/core';


@Component({
  tag: 'test-root-modals',
  styleUrl: 'test-root-modals.scss'
})
export class TestRootModals {
  handleModals: HTMLWcHandleModalsElement;

  async componentDidLoad() {
    await this.handleModals.addModal('test-modal', {
      onCloseModal: data => console.log(`close modal root`, data),
      onCustomClick: data => console.log(`custom click root`, data),
      overlap: true,
      overlay: false,
      props: { 'title-modal': 'modal a' }
    });
    setTimeout(() => this.handleModals.addModal('title-modal', { overlap: true, overlay: true, props: { 'title-modal': 'modal b' } }), 3000);
  }

  render() {
    return (
      <wc-handle-modals ref={el => this.handleModals = el}></wc-handle-modals>
    );
  }
}

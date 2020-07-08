import { Component, h } from '@stencil/core';


@Component({
  tag: 'test-root-modals',
  styleUrl: 'test-root-modals.scss'
})
export class TestRootModals {
  handleModals: HTMLWcHandleModalsElement;
  wrapperModalBlur: HTMLDivElement;

  async openModal() {
   const elModal = await this.handleModals.addModal('test-modal', {
      onCloseModal: data => console.log(`close modal root`, data),
      onCustomClick: data => console.log(`custom click root`, data),
      overlap: true,
      overlay: false,
      props: { 'title-modal': 'modal a' }
    });
    setTimeout(() => (elModal as any).doSomething(), 3000);
    setTimeout(() => this.handleModals.addModal('test-modal', {
      overlap: true, overlay: true, props: { 'title-modal': 'modal b' }, elementBlur: this.wrapperModalBlur, nameClassBlur: 'modal-blur'
    }), 3000);
  }

  async componentDidLoad() {
    this.openModal();
  }

  render() {
    return (
      <div>
        <div ref={el => this.wrapperModalBlur = el}>
          <button onClick={() => this.openModal()}>Abrir</button>
        </div>
        <wc-handle-modals ref={el => this.handleModals = el}></wc-handle-modals>

      </div>
    );
  }
}

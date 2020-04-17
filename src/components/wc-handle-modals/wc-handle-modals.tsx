import { Component, h, Method, State, Listen } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import { OptionsModal } from '../../models/cp-modals.models';

@Component({
  tag: 'wc-handle-modals',
  styleUrl: 'wc-handle-modals.scss'
})
export class WcHandleModals {

  @State() isShow: boolean = false;
  public wcOverlay: HTMLWcOverlayElement;

  @Listen('cpCloseModal')
  handleCpCloseModal(ev: CustomEvent<{element: Element, data: any}>) {
    console.log('cpCloseModal', event);
    const { detail: { element } } = ev;
    this.wcOverlay.closeModal(element.id);
  }

  @Listen('cpCustomClickModal')
  handleCpCustomClickModal(ev: CustomEvent<{element: Element, data: any}>) {
    console.log('cpCustomClickModal', ev);
  }

  private defaultOptions = {
    overlap: false,
  }

  @Method()
  async addModal(tagModal: string, options: OptionsModal = this.defaultOptions) {
    const elementModal = this.createElementModal(tagModal);
    this.insertParams(elementModal, options);
    this.insertModalInOverlay(elementModal, options.overlap);
  }

  @Method()
  async removeModal() {
    this.wcOverlay.cleanChildModals();
  }

  private insertParams(elementModal: HTMLElement, { props }: OptionsModal) {
    if(props) {
      for(const key in props) {
        elementModal.setAttribute(key, props[key]);
      }
    }
  }

  private async insertModalInOverlay(elementModal: HTMLElement, overlap: boolean = false) {
    if(!overlap) {
      await this.wcOverlay.cleanChildModals();
    }
    this.wcOverlay.appendChild(elementModal);
  }

  private createElementModal(tagElement: string): HTMLElement {
    const elementModal = document.createElement(tagElement);
    elementModal.style.display = 'none';
    this.addListeners(elementModal);
    elementModal.id = uuidv4();
    return elementModal;
  }

  private addListeners(elModal: HTMLElement) {
    elModal.addEventListener('componentLoad', () => {
      elModal.style.display = 'inherit';
      this.isShow = true;
    });
  }

  render() {
    return (
      <wc-overlay isShow={this.isShow} ref={el => this.wcOverlay = el}>
      </wc-overlay>
    );
  }
}

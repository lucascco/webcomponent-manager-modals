import { Component, h, Method, State, Listen } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';
import { OptionsModal } from '../../models/cp-modals.models';
import handleModalService from './../../service/handle-modals.service';
import { Modal } from '../../models/modal';

@Component({
  tag: 'wc-handle-modals',
  styleUrl: 'wc-handle-modals.scss'
})
export class WcHandleModals {

  @State() showOverlay: boolean = true;
  @State() isShow: boolean = false;
  public wcOverlay: HTMLWcOverlayElement;

  @Listen('cpCloseModal')
  handleCpCloseModal(ev: CustomEvent<{element: Element, data: any}>) {
    const { detail: { element, data } } = ev;
    this.closeModal(element, data);
  }

  @Listen('cpCustomClickModal')
  handleCpCustomClickModal(ev: CustomEvent<{element: Element, data: any}>) {
    const { detail: { element, data } } = ev;
    this.customClick(element, data);
  }

  private defaultOptions: OptionsModal = {
    overlap: false,
    overlay: true,
    elementBlur: undefined,
    nameClassBlur: '',
  }

  @Method()
  async addModal(tagModal: string, options: OptionsModal = this.defaultOptions) {
    const optionsModal = {...this.defaultOptions, ...options};
    this.showOverlay = optionsModal.overlay;
    const elementModal = this.createElementModal(tagModal);
    this.insertParams(elementModal, optionsModal);
    await this.insertModalInOverlay(elementModal, optionsModal.overlap);
    this.addModalToService(elementModal, elementModal.id, optionsModal);
    this.insertBlur(optionsModal.elementBlur, optionsModal.nameClassBlur);
  }

  @Method()
  async removeModal() {
    this.wcOverlay.cleanChildModals();
  }

  private customClick(element: Element, data: any) {
    const modal = handleModalService.getModalById(element.id);
    if(!modal) {
      console.warn('No modal registered with id ', element.id);
      return;
    }
    modal.customClick(data);
  }

  private closeModal(element: Element, data: any) {
    const modal = handleModalService.getModalById(element.id);
    this.wcOverlay.closeModal(element.id);
    if(!modal) {
      console.warn('No modal registered with id ', element.id);
      return;
    }
    modal.closeModal(data);
    this.removeBlur(modal.options.elementBlur, modal.options.nameClassBlur);
    handleModalService.removeModal(modal);
  }

  private addModalToService(ref: HTMLElement, id: string, options: OptionsModal) {
    const modal = new Modal(ref, id, options.onCloseModal, options.onCustomClick, options);
    handleModalService.addModal(modal);
  }

  private insertBlur(element: HTMLElement, nameClassBlur: string) {
    if(!element) {
      return;
    }
    element.classList.add(nameClassBlur);
  }

  private removeBlur(element: HTMLElement, nameClassBlur: string) {
    if(!element) {
      return;
    }
    element.classList.remove(nameClassBlur);
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
      <wc-overlay showOverlay={this.showOverlay} isShow={this.isShow} ref={el => this.wcOverlay = el}>
      </wc-overlay>
    );
  }
}

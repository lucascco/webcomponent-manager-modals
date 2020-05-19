import { OptionsModal } from "./cp-modals.models";

export class Modal {
  private optionsModal: OptionsModal;
  private refModal: HTMLElement;
  private idModal: string;
  private onCloseModal: (data?: any) => void;
  private onCustomClick: (data?: any) => void;

  constructor (refModal: HTMLElement, idModal: string, onCloseModal: (data?: any) => void, onCustomClick: (data?: any) => void, options: OptionsModal) {
    this.refModal = refModal;
    this.onCloseModal = onCloseModal;
    this.onCustomClick = onCustomClick;
    this.idModal = idModal;
    this.optionsModal = options;
  }

  get options() {
    return this.optionsModal;
  }

  get id() {
    return this.idModal;
  }

  get ref () {
    return this.refModal;
  }

  closeModal(data?: any) {
    if(!this.onCloseModal) {
      return;
    }
    this.onCloseModal(data);
  }

  customClick(data?: any) {
    if(!this.onCustomClick) {
      return;
    }
    this.onCustomClick(data);
  }
}

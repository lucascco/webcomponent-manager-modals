export class Modal {
  private refModal: HTMLElement;
  private idModal: string;
  private onCloseModal: (data?: any) => void;
  private onCustomClick: (data?: any) => void;

  constructor (refModal: HTMLElement, idModal: string, onCloseModal: (data?: any) => void, onCustomClick: (data?: any) => void) {
    this.refModal = refModal;
    this.onCloseModal = onCloseModal;
    this.onCustomClick = onCustomClick;
    this.idModal = idModal;
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

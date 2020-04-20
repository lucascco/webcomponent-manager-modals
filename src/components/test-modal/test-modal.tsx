import { Component, h, Event, EventEmitter, Prop, Element } from '@stencil/core';


@Component({
  tag: 'test-modal',
  styleUrl: 'test-modal.scss'
})
export class TestModal {

  @Element() testModalElement: Element;

  @Prop() title: string;

  @Event({eventName: 'componentLoad'})
  whenComponentLoad: EventEmitter;

  @Event({eventName: 'cpCloseModal'})
  cpCloseModal: EventEmitter<{element: Element, data: any}>;

  @Event({eventName: 'cpCustomClickModal'})
  cpCustomClickModal: EventEmitter;

  componentDidLoad() {
    this.whenComponentLoad.emit();
  }

  closeModal() {
    this.cpCloseModal.emit({ element: this.testModalElement, data: { origin: 'btn-close' } });
  }

  customClickModal() {
    this.cpCustomClickModal.emit({ element: this.testModalElement, data: { origin: 'custom-click' } });
  }

  render() {
    return (
      <div class="modal-test">
        <button onClick={() => this.closeModal()}>close modal</button>
        <button onClick={() => this.customClickModal()}>custom click</button>
        {this.title}
        One modal
      </div>
    );
  }
}

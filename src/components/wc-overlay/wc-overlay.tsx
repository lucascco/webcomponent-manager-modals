import { Component, h, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'wc-overlay',
  styleUrl: 'wc-overlay.scss',
  shadow: true
})
export class WcOverlay {

  @Element() wcOverlay;
  @Prop({mutable: true, reflect: true}) showOverlay: boolean = true;
  public divContainerOverlay: HTMLDivElement;

  @Method()
  async activeIsShow() {
    this.divContainerOverlay.classList.add('-is-show');
  }

  @Method()
  async deactiveIsShow() {
    this.divContainerOverlay.classList.remove('-is-show');
  }

  @Method()
  async closeModal(id: string): Promise<void> {
    const childModals = await this.getChildModals();
    const childToClose = childModals.find((child: HTMLElement) => child.id === id);
    if(childToClose) {
      this.wcOverlay.removeChild(childToClose);
    }
    this.turnOffShowIfEmpty();
  }

  @Method()
  async getChildModals(): Promise<Node[]> {
    const slotNode = this.getSlot();
    const listNodesModals = slotNode.assignedNodes();
    if(!listNodesModals.length) {
      return [];
    }
    return listNodesModals;
  }

  @Method()
  async cleanChildModals() {
    const childModals = await this.getChildModals();
    childModals.forEach(nodeModal => this.wcOverlay.removeChild(nodeModal));
  }

  private async turnOffShowIfEmpty() {
    const childModals = await this.getChildModals();
    if(!childModals.length) {
      this.deactiveIsShow();
    }
  }

  private getSlot() {
    return this.divContainerOverlay.getElementsByTagName('slot').item(0);
  }

  render() {
    return (
      <div
        ref={el => this.divContainerOverlay = el}
        class={`
        container-overlay
          ${this.showOverlay ? '' : '-no-overlay'}
        `}
        >
        <slot />
      </div>
    );
  }
}

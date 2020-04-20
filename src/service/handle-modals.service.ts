import { Modal } from './../models/modal';

export class HandleModalsService {
  static instance: HandleModalsService;

  listModalsOpen: Modal[] = [];

  static getInstance(): HandleModalsService {
    if(!this.instance) {
      this.instance = new HandleModalsService();
    }
    return this.instance;
  }

  addModal(modal: Modal) {
    this.listModalsOpen.push(modal);
  }

  removeModal(modal: Modal) {
    const idx = this.listModalsOpen.indexOf(modal);
    if(idx !== -1) {
      this.listModalsOpen.splice(idx, 1);
    }
  }

  getModalById(id: string) {
    return this.listModalsOpen.find(md => md.id === id);
  }
}

export default HandleModalsService.getInstance();

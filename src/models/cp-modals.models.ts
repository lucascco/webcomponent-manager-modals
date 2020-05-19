export interface OptionsModal {
  overlap?: boolean;
  overlay?: boolean;
  props?: { [key: string]: string }
  elementBlur?: HTMLElement;
  nameClassBlur?: string;
  onCloseModal?: (data?: any) => void;
  onCustomClick?: (data?: any) => void;
}

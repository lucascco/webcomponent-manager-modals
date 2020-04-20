export interface OptionsModal {
  overlap?: boolean;
  overlay?: boolean;
  props?: { [key: string]: string }
  onCloseModal?: (data?: any) => void;
  onCustomClick?: (data?: any) => void;
}

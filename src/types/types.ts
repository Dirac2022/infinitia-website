export interface Props {
  open: boolean;
  onClose: () => void;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}
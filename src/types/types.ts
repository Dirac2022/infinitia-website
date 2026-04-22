import { type ReactNode } from 'react';
import { type IconKey } from '../i18n/content';

export interface ServiceCardProps {
  index: number;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  icon: ReactNode;
  iconKey: IconKey;
}

export interface Props {
  open: boolean;
  onClose: () => void;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}
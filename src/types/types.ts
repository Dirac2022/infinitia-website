import { type ReactNode } from 'react';

export interface ServiceCardProps {
  index: number;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  icon: ReactNode;
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
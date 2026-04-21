import { type ReactNode } from 'react';

export interface ServiceCardProps {
  index: number;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  icon: ReactNode;
}
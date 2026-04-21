import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: [
    'bg-accent text-white',
    'hover:bg-accent-hover hover:-translate-y-px hover:shadow-[0_10px_30px_rgba(108,99,255,0.35)]',
    'active:translate-y-0 active:scale-[0.98]',
  ].join(' '),
  ghost: [
    'text-fg-primary border border-border-subtle bg-transparent',
    'hover:border-fg-muted hover:bg-node',
  ].join(' '),
};

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center gap-2.5',
        'px-[11px] py-[9px] rounded-lg',
        'text-sm font-medium tracking-[-0.01em]',
        'transition-all duration-200 whitespace-nowrap cursor-pointer',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}

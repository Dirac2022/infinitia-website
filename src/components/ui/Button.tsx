import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react';

type Variant = 'primary' | 'ghost';

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsAnchor;

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

const BASE =
  'inline-flex items-center justify-center gap-2.5 px-[22px] py-[8px] rounded-lg text-sm font-medium tracking-[-0.01em] transition-all duration-200 whitespace-nowrap cursor-pointer';

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const cls = [BASE, variants[variant], className].join(' ');

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AsAnchor;
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as AsButton)}>
      {children}
    </button>
  );
}

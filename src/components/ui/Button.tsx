import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// const btnBase =
//   'font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 transition-all';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-b from-primary-light to-primary-dark text-primary-foreground hover:from-primary hover:to-primary',
        secondary:
          'bg-gradient-to-b from-secondary-light to-secondary-dark text-secondary-foreground hover:from-secondary hover:to-secondary',
        accent:
          'bg-gradient-to-b from-accent-light to-accent-dark text-accent-content hover:from-accent-dark hover:to-accent-dark',
        destructive:
          'bg-gradient-to-b from-destructive-light to-destructive font-bold text-destructive-foreground hover:from-destructive-dark hover:to-destructive-dark hover:text-white',
        outline:
          'border border-input bg-background font-bold hover:bg-accent hover:text-accent-foreground',
        ghost:
          'btn-ghost font-semibold hover:bg-accent hover:text-accent-foreground',
        muted:
          'bg-primary-muted text-content-light/80 hover:text-content-muted/80 disabled:bg-neutral',
        disabled: 'btn-disabled bg-neutral-200 text-content-light/80',
      },
      size: {
        default: 'h-11 px-4 py-3',
        xs: 'h-7 rounded-md px-2 text-xs',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-14 rounded-md px-8 text-xl',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

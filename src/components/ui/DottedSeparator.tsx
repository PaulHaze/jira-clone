import { cn } from '@/lib/utils';
type DottedSeparatorProps = {
  className?: string;
  color?: 'light' | 'muted';
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: 'horizontal' | 'vertical';
};

// --light --muted for variables

export function DottedSeparator({
  className,
  color = 'light',
  height = '2px',
  dotSize = '2px',
  gapSize = '6px',
  direction = 'horizontal',
}: DottedSeparatorProps) {
  const isHorizontal = direction === 'horizontal';
  // const dotColor = `var(--light)`;
  return (
    <div
      className={cn(
        isHorizontal
          ? 'flex w-full items-center'
          : 'flex h-full flex-col items-center',
        className,
      )}
    >
      <p className={`text-content-${color}`}>DottedSeparator Placeholder</p>
    </div>
  );
}

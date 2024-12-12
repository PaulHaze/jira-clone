import { cn } from '@/lib/utils';
type DottedSeparatorProps = {
  className?: string;
  color?: 'light' | 'muted';
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: 'horizontal' | 'vertical';
};

// backgroundImage: `radial-gradient(circle, oklch(var(--${color})) 25%, transparent 95%)`,
// good for fading lines

export function DottedSeparator({
  className,
  color = 'light',
  height = '2px',
  dotSize = '2px',
  gapSize = '6px',
  direction = 'horizontal',
}: DottedSeparatorProps) {
  const isHorizontal = direction === 'horizontal';
  return (
    <div
      className={cn(
        'flex items-center',
        isHorizontal ? 'w-full' : 'h-full flex-col',
        className,
      )}
    >
      <div
        className={isHorizontal ? 'flex-grow' : 'flex-grow-0'}
        style={{
          width: isHorizontal ? '100%' : height,
          height: isHorizontal ? height : '100%',
          backgroundImage: `radial-gradient(circle, oklch(var(--${color})) 25%, transparent 25%)`,
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
          backgroundRepeat: isHorizontal ? 'repeat-x' : 'repeat-y',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}

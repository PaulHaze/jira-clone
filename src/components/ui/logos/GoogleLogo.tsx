import { cn } from '@/lib/utils';

type GoogleLogoProps = {
  className?: string;
};

export function GoogleLogo({ className }: GoogleLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {' '}
      class={cn('h-full w-full', className)}
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15.548 8.303A5.15 5.15 0 0 0 12.108 7C9.288 7 7 9.239 7 12s2.287 5 5.109 5c3.47 0 4.751-2.57 4.891-4.583h-4.159"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"
        ></path>
      </g>
    </svg>
  );
}

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-150 whitespace-nowrap';

    const variants = {
      default:
        'bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)]',
      primary:
        'bg-[var(--primary)] text-white',
      success:
        'bg-green-100 text-green-800',
      warning:
        'bg-yellow-100 text-yellow-800',
      danger:
        'bg-red-100 text-red-800',
      outline:
        'border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)]',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs rounded-md',
      md: 'px-2.5 py-0.5 text-sm rounded-md',
      lg: 'px-3 py-1 text-base rounded-lg',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;

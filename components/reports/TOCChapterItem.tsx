'use client';

import { cn } from '@/lib/utils';
import { TOCChapter, TOCItem } from '@/lib/toc-utils';

interface TOCChapterItemProps {
  chapter: TOCChapter;
  isOpen: boolean;
  onToggle: () => void;
}

interface TOCNestedItemProps {
  item: TOCItem;
  depth?: number;
}

const TOCNestedItem: React.FC<TOCNestedItemProps> = ({ item, depth = 0 }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div
        className={cn(
          'py-2.5 border-l-2 border-transparent',
          'text-sm text-[var(--muted-foreground)]',
          'hover:text-[var(--foreground)] hover:border-[var(--primary)]',
          'transition-colors duration-200',
          depth === 0 && 'pl-12 text-base font-medium',
          depth === 1 && 'pl-16 text-sm',
          depth === 2 && 'pl-20 text-sm',
          depth >= 3 && 'pl-24 text-xs'
        )}
      >
        <span className="text-[var(--primary)] font-mono mr-3">
          {item.number}
        </span>
        {item.title}
      </div>
      {hasChildren && (
        <div>
          {item.children!.map((child) => (
            <TOCNestedItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const TOCChapterItem: React.FC<TOCChapterItemProps> = ({
  chapter,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-[var(--border)] overflow-hidden">
      <button
        onClick={onToggle}
        className={cn(
          'w-full text-left p-6 flex items-start justify-between gap-4 group',
          'bg-[var(--muted)] hover:bg-[var(--muted)]/80',
          'transition-colors duration-200'
        )}
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
            {chapter.number && (
              <span className="text-[var(--primary)] font-mono mr-3">
                Chapter {chapter.number}.
              </span>
            )}
            {chapter.title}
          </div>
        </div>
        <svg
          className={cn(
            'w-5 h-5 text-[var(--muted-foreground)] flex-shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {chapter.children && chapter.children.length > 0 && (
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="bg-[var(--card)] pb-4">
            {chapter.children.map((child) => (
              <TOCNestedItem key={child.id} item={child} depth={0} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

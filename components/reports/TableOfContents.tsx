'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SidebarTOCItem } from '@/lib/toc-utils';

interface TableOfContentsProps {
  items: SidebarTOCItem[];
  className?: string;
  onShowFullTOC?: () => void;
  showFullTOC?: boolean;
  onNavigateToSection?: (sectionId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  className,
  onShowFullTOC,
  showFullTOC,
  onNavigateToSection,
}) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (showFullTOC && onNavigateToSection) {
      // Full TOC is open: trigger close + scroll sequence
      onNavigateToSection(id);
    } else {
      // Normal behavior: scroll immediately
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav
      className={cn(
        'sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto',
        className
      )}
    >
      <div className="pb-4">
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wide">
          Report Details
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                'text-sm transition-all duration-200',
                item.level === 2 && 'pl-4'
              )}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  'block py-1 border-l-2 pl-4 transition-colors duration-200',
                  activeId === item.id
                    ? 'border-[var(--primary)] text-[var(--primary)] font-medium'
                    : 'border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]'
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {onShowFullTOC && (
          <button
            onClick={onShowFullTOC}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)] rounded-md hover:bg-[var(--muted)] transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Table of Contents
          </button>
        )}
      </div>
    </nav>
  );
};

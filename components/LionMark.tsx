type LionMarkProps = {
  className?: string;
  title?: string;
};

export function LionMark({ className, title = "KOPI LION" }: LionMarkProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M60 4 72 14l15-2 7 14 14 7-2 16 10 11-10 11 2 16-14 7-7 14-15-2-12 10-12-10-15 2-7-14-14-7 2-16L4 60l10-11-2-16 14-7 7-14 15 2L60 4Zm0 22c-20 0-34 14-34 34 0 22 14 38 34 38s34-16 34-38c0-20-14-34-34-34Z"
      />
      <path
        fill="currentColor"
        d="M40 49c6-7 14-10 20-10s14 3 20 10l-3 24c-2 14-9 20-17 20s-15-6-17-20l-3-24Zm9 8c0 4 3 7 7 7-1-5-3-7-7-7Zm22 0c-4 0-6 2-7 7 4 0 7-3 7-7ZM60 67l-6 6 6 5 6-5-6-6Zm-11 12c3 8 18 11 22 0-7 4-15 4-22 0Z"
      />
      <path fill="currentColor" d="M34 37 21 23l5 22 8-8Zm52 0 13-14-5 22-8-8Z" />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "wordmark wordmark--compact" : "wordmark"}>
      <span>KOPI</span><span>LION</span>
    </span>
  );
}

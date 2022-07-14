export const Badge = ({ title, color }) => {
  return (
    <span
      className={`inline-flex no-wrap items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-light bg-${color}-50 text-${color}-700`}
    >
      {title}
      <button
        type="button"
        className={`flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-${color}-700 hover:bg-${color}-200 opacity-30 hover:opacity-100`}
      >
        <span className="sr-only">Remove</span>
        <svg
          className="h-2 w-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  );
};

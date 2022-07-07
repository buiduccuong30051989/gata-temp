export const IconPhp = ({ className }) => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10 12v8A10 10 0 0 1 8.17.17L10 2h5a5 5 0 0 1 5 4.99v9.02A4 4 0 0 1 16 20v-2a2 2 0 1 0 0-4h-4l-2-2zm5.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </svg>
);

export const IconLoading = ({ className = "animate-spin mr-2 w-4" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    fill="none"
    strokeWidth={3}
  >
    <circle
      cx={14}
      cy={14}
      r={12}
      stroke="currentColor"
      className="opacity-25"
    />
    <path
      d="M26 14c0-6.627-5.373-12-12-12"
      strokeLinecap="round"
      stroke="currentColor"
      className="opacity-75"
    />
  </svg>
);

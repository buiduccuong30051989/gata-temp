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

export const IconAddServer = ({ className = "w-4 h-4 text-gray-500" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10a2 2 0 00-2-2H5a2 2 0 00-2 2m16 4H5m14 0a2 2 0 002-2V9.702a2 2 0 00-.438-1.25L17.6 4.751A2 2 0 0016.04 4H7.96a2 2 0 00-1.561.75L3.438 8.453A2 2 0 003 9.702V12a2 2 0 002 2m14 0a2 2 0 012 2v2a2 2 0 01-2 2h-8m-6-6a2 2 0 00-2 2v1m14-6h.01M17 17h.01M14 11h.01M14 17h.01M4 20h4m-2-2v4"
    />
  </svg>
);

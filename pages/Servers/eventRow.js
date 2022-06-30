import { useState } from "react";
import Link from 'next/link'

export const EventRow = () => {
  const [loading, setLoading] = useState(false);

  return (
    <tr className="h-12 border-t border-gray-100">
      <td className="pr-4">
        <Link className="text-teal-400" href="/servers/570738">
          TESTSERVER
        </Link>
      </td>
      <td className="pr-4">
        Running Recipe (Update CA certificates (fix 'curl returned with 60')).
      </td>
      <td className="pr-4 text-gray-500 text-xs">Jun 28, 2022, 5:02 PM</td>
      <td className="w-12">
        <div className="flex items-center justify-end h-10">
          <div>
            <button
              onClick={() => setLoading((prev) => !prev)}
              disabled={loading}
              className={` h-10 text-teal-400 ${
                loading ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              }`}
              type="button"
            >
              <span className="flex items-center justify-between">
                {loading && (
                  <span>
                    <svg
                      className="animate-spin mr-2 w-4"
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
                  </span>
                )}
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    d="m5 1.667h10c.921 0 1.667.746 1.667 1.667v8.966a2.5 2.5 0 0 1 -.733 1.767l-3.534 3.533a2.5 2.5 0 0 1 -1.767.733h-5.633c-.92 0-1.667-.746-1.667-1.667v-13.333c0-.92.746-1.667 1.667-1.667zm5.833 10h4.167v-8.334h-10v13.333h5v-4.166c0-.46.373-.833.833-.833zm-3.75-5h5.833c.23 0 .417-.187.417-.417v-.833c0-.23-.187-.417-.417-.417h-5.833c-.23 0-.417.187-.417.417v.833c0 .23.187.417.417.417zm3.334 3.333h-3.334c-.23 0-.417-.187-.417-.417v-.833c0-.23.187-.417.417-.417h3.333c.23 0 .417.187.417.417v.833c0 .23-.187.417-.417.417z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {/**/}
          </div>
        </div>
      </td>
    </tr>
  );
};

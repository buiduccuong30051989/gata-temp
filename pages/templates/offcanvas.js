export const OffCanvas = () => {
  return (
    <div className="flex-1 h-0 overflow-y-auto">
      <div className="py-6 px-4 bg-v2-primary sm:px-6">
        <div className="flex items-center justify-between">
          <h2
            id="headlessui-dialog-title-258"
            className="text-lg font-medium text-white"
          >
            {" "}
            Edit Template{" "}
          </h2>
          <div className="ml-3 h-7 flex items-center">
            <button
              type="button"
              className="bg-v2-primary rounded-md text-white"
              tabIndex={0}
            >
              <span className="sr-only">Close panel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-1">{/**/}</div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="px-4 divide-y divide-gray-200 sm:px-6">
          <div className="space-y-6 pt-6 pb-5">
            {/**/}
            <div>
              <label
                htmlFor="template-name"
                className="block text-sm font-medium text-gray-900"
              >
                {" "}
                Template Name{" "}
              </label>
              <div className="mt-1">
                <div className="flex">
                  <input
                    type="text"
                    autoComplete="off"
                    id="template-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                  {/**/}
                  {/**/}
                </div>
                {/**/}
              </div>
              <div className="my-1 cfull-w mt-3">
                <div className="flex justify-between">
                  <label
                    htmlFor="display_text"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                </div>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    rows={1}
                    cols={100}
                    id="description"
                    placeholder
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span id="headlessui-label-259" className>
                  <span className="text-sm font-medium text-gray-900">
                    Enable Sharing
                  </span>
                </span>
                <button
                  modelvalue="false"
                  id="headlessui-switch-260"
                  role="switch"
                  type="button"
                  tabIndex={0}
                  aria-checked="false"
                  className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
                  aria-labelledby="headlessui-label-259"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  />
                </button>
              </div>
            </div>
            {/**/}
            <div>
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
            </div>
            {/**/}
            <div>
              <div className="flex justify-end">
                <a
                  className="font-medium text-xs text-gray-900 text-left pb-1 flex float-right"
                  href="https://app.instawp.io/subscription/plans"
                >
                  <span>Upgrade to unlock</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 ml-1 text-gray-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex justify-between items-center text-sm mt-2">
                <span id="headlessui-label-261" className>
                  <span className="text-sm font-medium text-gray-900">
                    Instant Template
                  </span>
                </span>
                <button
                  modelvalue="false"
                  id="headlessui-switch-262"
                  role="switch"
                  type="button"
                  tabIndex={0}
                  aria-checked="false"
                  disabled
                  className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
                  aria-labelledby="headlessui-label-261"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  />
                </button>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          readOnly
          id="template-embed"
          className="cursor-default top-0 opacity-0 absolute p-0 h-1"
        />
      </div>
    </div>
  );
};

import { useRouter } from "next/router";
import { LeftSidebarLayout } from "components/Layout";

export default function ServerDetail({ children }) {
  const router = useRouter();
  const { id } = router.query;

  const SubHeader = () => (
    <section className="flex flex-col">
      <div className="flex justify-between">
        <div>
          <a className="flex text-gray-600" href="/servers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="mr-2 w-5 h-5 transform rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 .012-1.402 1 1 0 0 1 1.402-.012l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                fill="currentColor"
              />
            </svg>{" "}
            Back to Servers
          </a>
        </div>
        <div className="flex items-center space-x-6">
          {/**/}
          <span className="flex items-center">
            <div className="inline-block">
              <div
                className="-mx-1 px-1 rounded-sm cursor-pointer"
                tabIndex={0}
              >
                <div className="flex items-center">
                  <div className>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mr-2 w-4 h-4 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.333 2.667H2.667c-.736 0-1.333.597-1.333 1.333v8c0 .736.597 1.333 1.333 1.333h10.667c.736 0 1.333-.597 1.333-1.333V4c0-.736-.597-1.333-1.333-1.333zm0 9.333H2.667V5.333h10.667V12zM7 10.667H4.333c-.184 0-.333-.149-.333-.333V7c0-.184.149-.333.333-.333H7c.184 0 .333.149.333.333v3.333c0 .184-.149.333-.333.333zM9 8h2.667c.184 0 .333-.149.333-.333V7c0-.184-.149-.333-.333-.333H9c-.184 0-.333.149-.333.333v.667c0 .184.149.333.333.333zm1.333 2.667H9c-.184 0-.333-.149-.333-.333v-.667c0-.184.149-.333.333-.333h1.333c.184 0 .333.149.333.333v.667c0 .184-.149.333-.333.333z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="mr-1 text-gray-600">Server ID</span>
                      <span className="text-gray-400">570738</span>
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5001 9.33332V2.33332C10.5001 1.68899 9.97775 1.16666 9.33341 1.16666H2.33341C1.68908 1.16666 1.16675 1.68899 1.16675 2.33332V9.33332C1.16675 9.97766 1.68908 10.5 2.33341 10.5H9.33341C9.97775 10.5 10.5001 9.97766 10.5001 9.33332ZM2.33341 2.33332H9.33342V9.33332H2.33341V2.33332ZM11.6667 10.5V3.49999C12.3111 3.49999 12.8334 4.02232 12.8334 4.66666V10.5C12.8334 11.7887 11.7887 12.8333 10.5001 12.8333H4.66675C4.02242 12.8333 3.50008 12.311 3.50008 11.6667H10.5001C11.1444 11.6667 11.6667 11.1443 11.6667 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              className="mr-2 w-4 h-4 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M13.667 6.667c.184 0 .333-.149.333-.333v-.667c0-.184-.149-.333-.333-.333h-1v-.667c0-.736-.597-1.333-1.333-1.333h-.667v-1c0-.184-.149-.333-.333-.333h-.667c-.184 0-.333.149-.333.333v1H6.667v-1c0-.184-.149-.333-.333-.333h-.667c-.184 0-.333.149-.333.333v1h-.667c-.736 0-1.333.597-1.333 1.333v.667h-1c-.184 0-.333.149-.333.333v.667c0 .184.149.333.333.333h1v2.667h-1c-.184 0-.333.149-.333.333v.667c0 .184.149.333.333.333h1v.667c0 .736.597 1.333 1.333 1.333h.667v1c0 .184.149.333.333.333h.667c.184 0 .333-.149.333-.333v-1h2.667v1c0 .184.149.333.333.333h.667c.184 0 .333-.149.333-.333v-1h.667c.736 0 1.333-.597 1.333-1.333v-.667h1c.184 0 .333-.149.333-.333v-.667c0-.184-.149-.333-.333-.333h-1V6.667h1zm-2.333 4.667H4.667V4.667h6.667v6.667zM9 9.333H7c-.184 0-.333-.149-.333-.333V7c0-.184.149-.333.333-.333h2c.184 0 .333.149.333.333v2c0 .184-.149.333-.333.333z"
                fill="currentColor"
              />
            </svg>
            <span className="mr-1 text-gray-600">Server Type</span>
            <span className="text-gray-400">App</span>
          </span>
          <span className="flex items-center">
            <span className="text-uppercase inline-flex items-center px-2.5 py-1 text-sm rounded-full bg-teal-400 bg-opacity-10 text-gray-900">
              <span className="relative flex mr-1.5 w-2.5 h-2.5">
                {/**/}
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-teal-400" />
              </span>
              Connected
            </span>
            <button className="ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 h-5 text-gray-500"
                style={{ animationDirection: "reverse" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.425c.002-.113-.044-.222-.125-.3L9.708.958C9.63.879 9.523.835 9.412.835s-.218.044-.296.123L6.163 3.9c-.16.165-.16.427 0 .592l2.953 2.942c.078.079.185.123.296.123s.218-.044.296-.123l.167-.167c.081-.078.127-.187.125-.3V5c2.764 0 5.005 2.239 5.005 5 0 .808-.197 1.603-.575 2.317-.086.162-.056.362.075.492l.609.608c.092.091.222.134.35.117s.241-.091.309-.2a6.66 6.66 0 0 0 .002-6.664C14.584 4.607 12.383 3.336 10 3.333V1.425zm.588 11.018c.111 0 .218.044.296.123l2.953 2.942c.16.165.16.427 0 .592l-2.953 2.942c-.078.079-.185.123-.296.123s-.218-.044-.296-.123l-.167-.167c-.082-.078-.127-.187-.125-.3v-1.908c-2.383-.002-4.584-1.274-5.774-3.336a6.66 6.66 0 0 1 .002-6.664c.064-.115.178-.195.309-.217s.258.025.35.117l.617.617c.128.131.159.329.075.492-.386.714-.587 1.513-.584 2.325 0 2.761 2.241 5 5.005 5v-1.967c-.002-.113.044-.222.125-.3l.167-.167c.078-.079.185-.123.296-.123z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="text-teal-400 mr-5 w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
          <h1 className="forge-h2 inline-block mr-5 max-w-2xl truncate">
            TESTSERVER
          </h1>
        </div>
        <div className="flex items-center ml-2">
          <div className="flex">
            <span className="z-20 mr-3">
              <button className="forge-btn-secondary shadow-sm">
                <span className="flex items-center font-bold truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2 w-5 h-5 text-blue-400"
                  >
                    <path
                      d="M17.083 8.333h-4.167c-.23 0-.417-.187-.417-.417v-.242a.41.41 0 0 1 .125-.3l1.483-1.483C13.025 4.79 11.545 4.169 10 4.167c-3.169.007-5.753 2.543-5.819 5.711s2.409 5.81 5.575 5.95 5.864-2.274 6.077-5.436c.013-.22.196-.392.417-.392h.833c.114.003.221.051.3.133s.116.195.108.308a7.5 7.5 0 0 1-14.497 2.227A7.5 7.5 0 0 1 15.308 4.7l1.242-1.242a.41.41 0 0 1 .292-.125h.242c.23 0 .417.187.417.417v4.167c0 .23-.186.417-.417.417z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                  Restart{" "}
                </span>
                <span className="flex flex-shrink-0 items-center ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4 transform duration-300 rotate-90"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 .012-1.402 1 1 0 0 1 1.402-.012l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="forge-dropdown w-52 origin-top-left"
                style={{ display: "none" }}
              >
                <span className="forge-dropdown-item text-gray-900">
                  Restart Server
                </span>
                <span className="forge-dropdown-item text-gray-900">
                  Restart Nginx
                </span>
                <span className="forge-dropdown-item text-gray-900">
                  {" "}
                  Restart MySQL{" "}
                </span>
                {/**/}
                <span className="forge-dropdown-item text-gray-900">
                  Restart Redis
                </span>
                <span className="forge-dropdown-item text-gray-900">
                  Restart Supervisor
                </span>
                <div className="mb-3 pb-2 border-b" />
                <span className="forge-dropdown-item text-gray-900">
                  Restart PHP 8.1
                </span>
              </div>
            </span>
            <span className="relative z-20">
              <button className="forge-btn-secondary shadow-sm">
                <span className="flex items-center font-bold truncate">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mr-2 w-5 h-5 text-red-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1.667c-4.602 0-8.333 3.731-8.333 8.333S5.398 18.333 10 18.333s8.333-3.731 8.333-8.333c0-2.21-.878-4.33-2.441-5.893S12.21 1.667 10 1.667zm0 15A6.67 6.67 0 0 1 3.333 10 6.67 6.67 0 0 1 10 3.333 6.67 6.67 0 0 1 16.667 10c0 1.768-.702 3.464-1.953 4.714S11.768 16.667 10 16.667zM6.667 7.708a1.04 1.04 0 0 1 1.042-1.042h4.583a1.04 1.04 0 0 1 1.042 1.042v4.583a1.04 1.04 0 0 1-1.042 1.042H7.708a1.04 1.04 0 0 1-1.042-1.042V7.708z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                  Stop{" "}
                </span>
                <span className="flex flex-shrink-0 items-center ml-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="w-4 h-4 transform duration-300 rotate-90"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 .012-1.402 1 1 0 0 1 1.402-.012l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="forge-dropdown right-0 w-52 origin-top-right"
                style={{ display: "none" }}
              >
                <span className="forge-dropdown-item text-gray-900">
                  Stop Nginx
                </span>
                <span className="forge-dropdown-item text-gray-900">
                  {" "}
                  Stop MySQL{" "}
                </span>
                {/**/}
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 text-gray-500">
        <div className="flex items-center mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-2 w-4 h-4 text-gray-400"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118-.731.448-1.358 1.047-1.838 1.758S4.226 8.155 4.083 9zM10 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 2c-.076 0-.232.032-.465.262s-.497.623-.737 1.182c-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182S10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118.731.448 1.358 1.047 1.838 1.758s.802 1.515.945 2.361h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182S9.924 16 10 16s.232-.032.465-.262.498-.623.737-1.182c.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946c-.143.845-.465 1.65-.945 2.361s-1.107 1.31-1.838 1.758zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083c.143.845.465 1.65.945 2.361s1.107 1.31 1.838 1.758z"
              fill="currentColor"
            />
          </svg>
          <span className="mr-1 text-gray-600">Public IP</span>
          <div className="text-gray-400">
            <div className="-mx-1 px-1 rounded-sm cursor-pointer" tabIndex={0}>
              38.54.1.72
            </div>
          </div>
        </div>
        {/**/}
        {/**/}
        <div className="flex items-center mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinejoin="round"
            className="mr-2 w-4 h-4 text-gray-400"
          >
            <path d="M16 21a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5h0zm0 3c-4.922 0-7.887 2.492-9.477 4.502C5.648 29.608 6.525 31 7.935 31h16.13c1.41 0 2.287-1.392 1.412-2.498C23.887 26.492 20.922 24 16 24z" />
            <path
              d="M28.02 24.975c1.939-2.59 2.985-5.74 2.98-8.975 0-8.284-6.716-15-15-15S1 7.716 1 16c0 3.419 1.074 6.477 3 9"
              strokeLinecap="round"
            />
          </svg>
          <span className="mr-1 text-gray-600">Circle</span>
          <span className="w-48 text-gray-400 truncate">Test</span>
        </div>
      </div>
    </section>
  );

  const Nav = () => (
    <>
      <a className="active forge-tab-item" href="/servers/570738/sites">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-3 w-5 h-5 text-gray-400 text-teal-400"
        >
          <path
            fillRule="evenodd"
            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118-.731.448-1.358 1.047-1.838 1.758S4.226 8.155 4.083 9zM10 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm0 2c-.076 0-.232.032-.465.262s-.497.623-.737 1.182c-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182S10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118.731.448 1.358 1.047 1.838 1.758s.802 1.515.945 2.361h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182S9.924 16 10 16s.232-.032.465-.262.498-.623.737-1.182c.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946c-.143.845-.465 1.65-.945 2.361s-1.107 1.31-1.838 1.758zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083c.143.845.465 1.65.945 2.361s1.107 1.31 1.838 1.758z"
            fill="currentColor"
          />
        </svg>{" "}
        Sites{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/databases">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-3 w-5 h-5 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm14 1a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zM2 13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zm14 1a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z"
            fill="currentColor"
          />
        </svg>{" "}
        Database{" "}
      </a>
      {/**/}
      <a className="forge-tab-item" href="/servers/570738/keys">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.59 3H20C20.5523 3 21 3.44772 21 4V6.5C21 6.77614 20.7761 7 20.5 7H18.63C18.4864 7.01056 18.3548 7.08369 18.27 7.2H18.22C18.0793 7.34052 18.0002 7.53115 18 7.73V9.49C18 9.76614 17.7761 9.99 17.5 9.99H15.72C15.5212 9.99017 15.3305 10.0693 15.19 10.21L14.93 10.47C14.7893 10.6105 14.7102 10.8012 14.71 11V11.72C14.7089 11.9823 14.6047 12.2337 14.42 12.42L13.54 13.3C13.8418 13.9943 13.9983 14.743 14 15.5C14 18.5376 11.5376 21 8.5 21C5.46243 21 3 18.5376 3 15.5C3 12.4624 5.46243 10 8.5 10C9.26157 9.99907 10.0147 10.1592 10.71 10.47L17.89 3.29C18.0763 3.10526 18.3277 3.0011 18.59 3ZM5.44 16.56C5.44 17.6646 6.33543 18.56 7.44 18.56C7.97043 18.56 8.47914 18.3493 8.85421 17.9742C9.22929 17.5991 9.44 17.0904 9.44 16.56C9.44 15.4554 8.54457 14.56 7.44 14.56C6.33543 14.56 5.44 15.4554 5.44 16.56Z"
            fill="currentColor"
          />
        </svg>{" "}
        SSH Keys{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/monitoring">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-.586-1.414A2 2 0 0 0 12 0H2zm9 4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v6a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4zM8 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6zM5 9a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1V9z"
            fill="currentColor"
          />
        </svg>{" "}
        Monitoring{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/backups">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3zm0-5v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7zm14-2c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>{" "}
        Backups{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/php">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M10 12v8A10 10 0 0 1 8.17.17L10 2h5a5 5 0 0 1 5 4.99v9.02A4 4 0 0 1 16 20v-2a2 2 0 1 0 0-4h-4l-2-2zm5.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          />
        </svg>{" "}
        PHP{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/packages">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3 w-5 h-5 text-gray-400"
        >
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>{" "}
        Packages{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/nginx-templates">
        <svg
          fill="none"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            d="M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm0 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-.707-.293A1 1 0 0 1 0 13V7zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2z"
            fill="currentColor"
          />
        </svg>{" "}
        Nginx Templates{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/scheduler">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H7V3a1 1 0 0 0-1-1zm0 5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 1 1 0 0 0-1-1H6z"
            fill="currentColor"
          />
        </svg>{" "}
        Scheduler{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/daemons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0 1 12 2v5h4a1 1 0 0 1 .887.538 1 1 0 0 1-.067 1.035l-7 10a1 1 0 0 1-1.12.381A1 1 0 0 1 8 18v-5H4a1 1 0 0 1-.887-.538 1 1 0 0 1 .067-1.035l7-10a1 1 0 0 1 1.12-.38v-.001z"
            fill="currentColor"
          />
        </svg>{" "}
        Daemons{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/network">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 14"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M17.778 5.222a11 11 0 0 0-15.556 0A1 1 0 0 1 .82 5.21a1 1 0 0 1-.012-1.402 13 13 0 0 1 18.384 0 1 1 0 0 1-.012 1.402 1 1 0 0 1-1.402.012zM14.95 8.05A7 7 0 0 0 10 6 7 7 0 0 0 5.05 8.05a1 1 0 0 1-1.402-.012 1 1 0 0 1-.012-1.402A9 9 0 0 1 10 4a9 9 0 0 1 6.364 2.636 1 1 0 0 1-.012 1.402 1 1 0 0 1-1.402.012zm-2.83 2.83a3 3 0 0 0-4.242 0 1 1 0 0 1-1.415 0 1 1 0 0 1 0-1.415A5 5 0 0 1 9.999 8a5 5 0 0 1 3.536 1.465 1 1 0 0 1 0 1.415 1 1 0 0 1-1.415 0zM9 13a1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z"
            fill="currentColor"
          />
        </svg>{" "}
        Network{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/logs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-3.11 11.32l-3.54 3.53a.48.48 0 0 1-.7 0l-3.54-3.53a.51.51 0 0 1 0-.71l.21-.21a.5.5 0 0 1 .35-.14H10V9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3.76h1.33a.5.5 0 0 1 .35.14l.21.21a.51.51 0 0 1 0 .71zM5 7h14V5H5v2z"
            fill="currentColor"
          />
        </svg>{" "}
        Logs{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/events">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            d="M7 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7zM4 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm-2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"
            fill="currentColor"
          />
        </svg>{" "}
        Events{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/integrations">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            d="M8 1.5A1.5 1.5 0 0 1 9.5 0 1.5 1.5 0 0 1 11 1.5V2a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-.5A1.5 1.5 0 0 0 13 9.5a1.5 1.5 0 0 0 1.5 1.5h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.5A1.5 1.5 0 0 0 9.5 13 1.5 1.5 0 0 0 8 14.5v.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1h-.5A1.5 1.5 0 0 1 0 9.5 1.5 1.5 0 0 1 1.5 8H2a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-.5z"
            fill="currentColor"
          />
        </svg>{" "}
        Integrations{" "}
      </a>
      <a className="forge-tab-item" href="/servers/570738/meta">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="mr-4 w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M20.59 3.29l.12.12a1.05 1.05 0 0 1 .29.71v7.95a2 2 0 0 1-.59 1.42l-7.22 7.22a1 1 0 0 1-1.41 0l-8.49-8.49a1 1 0 0 1 0-1.41l7.22-7.22A2 2 0 0 1 11.93 3h7.95a1.05 1.05 0 0 1 .71.29zM14 8a2 2 0 0 0 3.414 1.414A2 2 0 0 0 16 6a2 2 0 0 0-2 2z"
            fill="currentColor"
          />
        </svg>{" "}
        Meta{" "}
      </a>
    </>
  );

  return (
    <LeftSidebarLayout SubHeader={SubHeader} Nav={Nav}>
      {children}
    </LeftSidebarLayout>
  );
}

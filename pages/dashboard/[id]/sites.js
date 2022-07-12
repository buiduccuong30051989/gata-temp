import ServerDetail from "./index";
import { Disclosure } from "@headlessui/react";
import {
  HiOutlineChevronDown,
  HiOutlineX,
  HiOutlineDatabase,
  HiOutlineXCircle,
  HiOutlineTrash,
} from "react-icons/hi";

const Sites = () => {
  return (
    <div className="p-sites">
      <div className="card">
        <Disclosure>
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-normal">New Site</h5>
            <Disclosure.Button className="forge-btn-secondary px-2 py-1">
              <HiOutlineChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-500 transform duration-300 rotate-90" />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="py-2">
            <form>
              <input type="submit" className="hidden" />
              <div className="bg-blue-50 flex flex-row p-4 text-sm rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-blue-400 flex-shrink-0 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.668 10c0-4.602 3.731-8.333 8.333-8.333 2.21 0 4.33.878 5.893 2.441S18.335 7.79 18.335 10c0 4.602-3.731 8.333-8.333 8.333S1.668 14.602 1.668 10zm1.667 0a6.67 6.67 0 0 0 6.667 6.667c1.768 0 3.464-.702 4.714-1.953s1.953-2.946 1.953-4.714a6.67 6.67 0 0 0-6.667-6.667A6.67 6.67 0 0 0 3.335 10zm7.5.417c0-.23-.187-.417-.417-.417h-.833c-.23 0-.417.187-.417.417v2.5c0 .23.187.417.417.417h.833c.23 0 .417-.186.417-.417v-2.5zm-.417-3.75c.23 0 .417.187.417.417v.833c0 .23-.187.417-.417.417h-.833c-.23 0-.417-.187-.417-.417v-.833c0-.23.187-.417.417-.417h.833z"
                    fill="currentColor"
                  />
                </svg>
                <div className="flex flex-grow ml-4 mt-0.5">
                  <p className="text-gray-800">
                    {" "}
                    Think of sites as representing each "domain" on your server.
                    The "default" site is included with each freshly provisioned
                    server; however, you should delete it and create a new site
                    with a valid domain name when you are ready to launch your
                    production site. If you need to host additional domains or
                    sub-domains, you may add them here. <br />
                    <br />
                    When using Website Isolation, Forge will automatically
                    create an isolated PHP-FPM process for the given site.{" "}
                  </p>
                </div>
              </div>
              {/**/}
              <div className="flex flex-col mt-4">
                <label>Root Domain</label>
                <div className="flex flex-col mt-1">
                  <input
                    type="text"
                    className="forge-input"
                    placeholder="domain.com"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label>Aliases</label>
                <div className="flex flex-col mt-1">
                  <input
                    type="text"
                    className="forge-input"
                    placeholder="second-domain.com,third-domain.com"
                  />
                </div>
              </div>
              {/**/}
              <div className="flex flex-col mt-4">
                <label>Project Type</label>
                <div className="flex flex-col mt-1">
                  <select className="forge-input" name="type">
                    <option value="php">General PHP / Laravel</option>
                    <option value="octane">Laravel Octane</option>
                    <option value="html">Static HTML</option>
                    <option value="symfony">Symfony &lt; 4.0</option>
                    <option value="symfony_dev">Symfony (Dev) &lt; 4.0</option>
                    <option value="symfony_four">Symfony &gt;= 4.0</option>
                  </select>
                </div>
              </div>
              {/**/}
              {/**/}
              <div className="flex flex-col mt-4">
                <label>Web Directory</label>
                <div className="flex flex-col mt-1">
                  <input type="text" className="forge-input" />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label>PHP Version</label>
                <div className="flex flex-col mt-1">
                  <select className="forge-input">
                    <option value="php81">PHP 8.1</option>
                  </select>
                </div>
              </div>
              {/**/}
              {/**/}
              <div className="flex flex-col mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="forge-checkbox" />
                  <span className="pl-2">Allow Wildcard Sub-Domains</span>
                </label>
              </div>
              <div className="flex flex-col mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="forge-checkbox" />
                  <span className="pl-2">Use Website Isolation</span>
                </label>
              </div>
              {/**/}
              <div className="flex flex-col mt-4">
                <label>
                  <input type="checkbox" className="forge-checkbox" />
                  <span className="pl-2">Create Database</span>
                </label>
              </div>
              {/**/}
            </form>
            <div>
              <form className="flex justify-end mt-4">
                <button
                  className="cursor-pointer forge-btn-primary"
                  type="submit"
                >
                  <span className="flex items-center justify-between">
                    <span />
                    Add
                  </span>
                </button>
              </form>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>

      <div className="card mt-4">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-normal">Active Sites</h5>
        </div>
        <div className="py-2">
          <table className="w-full text-left">
            <thead className="text-gray-500">
              <tr className="h-10">
                <th scope="col" />
                <th scope="col" className="pr-4 font-normal">
                  Domain
                </th>
                <th scope="col" className="pr-4 w-full font-normal">
                  App
                </th>
                <th scope="col" className="pr-4 whitespace-nowrap font-normal">
                  Last Deployed
                </th>
                <th scope="col" className="font-normal">
                  Isolated
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="divide-gray-100 divide-y">
                <td className="px-2 py-4">
                  <div className="flex items-center">
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                </td>
                <td className="pr-4 px-3 py-4 max-w-xs">
                  <div className="flex items-center">
                    <a
                      className="text-primary-400 truncate"
                      href="/servers/570738/sites/1682253"
                    >
                      {/**/} default
                    </a>
                  </div>
                </td>
                <td className="pr-4 px-3 py-4 max-w-40">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div>
                          <HiOutlineX className="mr-2 w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-light">No App Installed</span>
                          <span className="text-gray-500 whitespace-nowrap text-xs leading-tight">
                            PHP 8.1
                          </span>
                        </div>
                      </div>
                      <div>{/**/}</div>
                    </div>
                  </div>
                </td>
                <td className="pr-4 px-3 py-4 text-gray-500 whitespace-nowrap text-xs">
                  <div className="flex items-center">
                    <div className="mr-1">{/**/}</div>
                    <span>—</span>
                  </div>
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center justify-end">
                    <div>
                      <HiOutlineXCircle className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="divide-gray-100 divide-y">
                <td className="px-2 py-4">
                  <div className="flex items-center"></div>
                </td>
                <td className="pr-4 px-3 py-4 max-w-xs">
                  <div className="flex items-center">
                    <a
                      className="text-primary-400 truncate"
                      href="/servers/570738/sites/1682256"
                    >
                      {/**/} test.com
                    </a>
                  </div>
                </td>
                <td className="pr-4 px-3 py-4 max-w-40">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div>
                          <HiOutlineDatabase className="mr-2 w-4 h-4 text-gray-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-light">phpMyAdmin</span>
                          <span className="text-gray-500 whitespace-nowrap text-xs leading-tight">
                            PHP 8.1
                          </span>
                        </div>
                      </div>
                      <div>{/**/}</div>
                    </div>
                  </div>
                </td>
                <td className="pr-4 px-3 py-4 text-gray-500 whitespace-nowrap text-xs">
                  <div className="flex items-center">
                    <div className="mr-1">{/**/}</div>
                    <span>—</span>
                  </div>
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center justify-end">
                    <div>
                      <HiOutlineXCircle className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="flex items-center text-gray-400 underline font-normal">
          <HiOutlineTrash className="mr-2 w-4 h-4" />
          Destroy Server{" "}
        </button>
      </div>
    </div>
  );
};

Sites.getLayout = function getLayout(page) {
  return <ServerDetail>{page}</ServerDetail>;
};

export default Sites;

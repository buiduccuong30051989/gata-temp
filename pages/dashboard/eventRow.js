import { useState } from "react";
import {
  HiOutlineExternalLink,
  HiOutlineClock,
  HiOutlinePlusCircle,
  HiOutlineX,
  HiOutlineLogout,
  HiOutlineFlag,
  HiOutlineTemplate,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import { IconLoading } from "components/Icons";
import { Tooltip } from "components/Tooltip";
import Link from "next/link";
import { Dropdown } from "components/Dropdown";

const MyPlan = () => {
  return (
    <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
      <div className="block px-4 py-2 text-xs text-gray-400" data-v-29e4ae6d>
        {" "}
        Common Options{" "}
      </div>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        target="__blank"
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
        </svg>
        <span data-v-29e4ae6d>View Creds</span>
      </button>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
        </svg>
        <span data-v-29e4ae6d>Migrate</span>
      </button>
      <div className="dropdown pt-0 relative" data-v-29e4ae6d>
        <button
          className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
          data-v-29e4ae6d
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-v-29e4ae6d
          >
            <path
              d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
              data-v-29e4ae6d
            />
          </svg>
          <span data-v-29e4ae6d>Export As</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
            data-v-29e4ae6d
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              data-v-29e4ae6d
            />
          </svg>
        </button>
        <ul
          className=" dropdown-menu absolute hidden pt-1 left-full top-0 rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white w-10/12 "
          data-v-29e4ae6d
        >
          <li className data-v-29e4ae6d>
            <button
              className=" w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
              data-v-29e4ae6d
            >
              {" "}
              LocalWP{" "}
            </button>
          </li>
        </ul>
      </div>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
        </svg>
        <span data-v-29e4ae6d>Delete</span>
      </button>
      <div className=" block px-4 py-2 text-xs text-gray-400 " data-v-29e4ae6d>
        {" "}
        Advanced Options{" "}
      </div>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
            data-v-29e4ae6d
          />
          <path
            d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
            data-v-29e4ae6d
          />
        </svg>
        <span data-v-29e4ae6d>Clone</span>
      </button>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
        </svg>
        <span className="truncate" data-v-29e4ae6d>
          Access FTP/SSH
        </span>
      </button>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        target="__blank"
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            fillRule="evenodd"
            d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
        </svg>
        <span className="truncate" data-v-29e4ae6d>
          Map domain
        </span>
      </button>
      <button
        className=" flex w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition "
        data-v-29e4ae6d
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-v-29e4ae6d
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
            clipRule="evenodd"
            data-v-29e4ae6d
          />
        </svg>
        <span className="truncate" data-v-29e4ae6d>
          Unreserve Site
        </span>
      </button>
    </div>
  );
};

export const EventRow = () => {
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <tr className="h-12 border-t border-gray-100">
      <td>
        <input type="checkbox" className="forge-checkbox" />
      </td>
      <td className="pr-4">
        <span className="flex items-center text-gray-500">
          www.google.com.vn
          <a href="#">
            <HiOutlineExternalLink className="w-4 h-4 ml-2 text-brands-info" />
          </a>
        </span>
      </td>
      <td className="pr-4">
        <span className="flex items-center">
          <HiOutlineClock className="icon w-4 h-4 mr-2 text-gray-500" />6 day,
          23 hours, 59 mins
        </span>
      </td>
      <td className="pr-4 text-gray-500 text-xs">108.93 MB</td>
      <td className="pr-4">
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-1 py-2 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="ct-tag pl-4 pr-2 is-warning">
                Tag 02
                <button>
                  <HiOutlineX className="w-3 h-3 ml-1 icon" />
                </button>
              </div>
              <div className="ct-tag pl-4 pr-2 is-dark">
                Tag 03
                <button>
                  <HiOutlineX className="w-3 h-3 ml-1 icon" />
                </button>
              </div>
            </div>
            {Boolean(showMore) && (
              <div className="grid grid-cols-2 gap-2">
                <div className="ct-tag pl-4 pr-2 is-warning">
                  Tag 02
                  <button>
                    <HiOutlineX className="w-3 h-3 ml-1 icon" />
                  </button>
                </div>
                <div className="ct-tag pl-4 pr-2 is-dark">
                  Tag 03
                  <button>
                    <HiOutlineX className="w-3 h-3 ml-1 icon" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="ct-tag is-light w-[84px]"
          >
            {showMore ? "Show less" : "+4 more"}
          </button>
          <button>
            <HiOutlinePlusCircle className="icon w-4 h-4 text-gray-500" />
          </button>
        </div>
      </td>
      <td className="pr-4">
        <div className="inline-flex rounded-md shadow-sm">
          <Tooltip content="Auto Login">
            <button className="forge-btn-secondary rounded-none rounded-l-lg">
              <span className="icon is-small">
                <HiOutlineLogout className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Reserve">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlineFlag className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Tooltip content="Save Template">
            <button className="forge-btn-secondary rounded-none -ml-px">
              <span className="icon is-small">
                <HiOutlineTemplate className="w-5 h-5 text-gray-500" />
              </span>
            </button>
          </Tooltip>
          <Dropdown
            btnClass="icon is-small"
            menuClass="relative forge-btn-secondary rounded-none rounded-r-lg -ml-px"
            arrow={false}
            btnChildren={
              <Tooltip content="More Action">
                <span>
                  <HiOutlineDotsVertical className="w-5 h-5 text-gray-500" />
                </span>
              </Tooltip>
            }
            dropdownChildren={<MyPlan />}
          />
        </div>
      </td>
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
                    <IconLoading />
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
          </div>
        </div>
      </td>
    </tr>
  );
};

import { Disclosure } from "@headlessui/react";
import {
  HiOutlineChevronDown,
  HiOutlineX,
  HiOutlineDatabase,
  HiOutlineXCircle,
  HiOutlineTrash,
} from "react-icons/hi";

import { LeftSidebarLayout } from "components/Layout";

export default function Profile() {
  return (
    <LeftSidebarLayout>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-gray-700 font-normal">Profile Information</h3>
        <div className="mt-3">
          <label for="name" className="block text-gray-500">
            Name
          </label>
          <input type="text" id="name" className="wphub-input mt-1 w-full" />
        </div>
        <div className="mt-3">
          <label for="Email" className="block text-gray-500">
            Email
          </label>
          <input type="email" id="Email" className="wphub-input mt-1 w-full" />
        </div>
        <div className="flex mt-3 justify-end">
          <button className="wphub-btn-primary min-w-[100px]">Save</button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mt-4">
        <h3 className="text-gray-700 font-normal">SSH Key</h3>
        <div className="mt-3">
          <label for="ssh" className="block text-gray-500">
            Add your public SSH Key
          </label>
          <textarea id="ssh" rows={3} className="wphub-input mt-1 w-full" />
        </div>
        <div className="flex mt-3 justify-end">
          <button className="wphub-btn-primary min-w-[100px]">Save</button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mt-4">
        <h3 className="text-gray-700 font-normal">Password</h3>
        <div className="mt-3">
          <label for="current_passowrd" className="block text-gray-500">
            Current Password
          </label>
          <input
            type="password"
            id="current_passowrd"
            className="wphub-input mt-1 w-full"
          />
        </div>
        <div className="mt-3">
          <label for="new_password" className="block text-gray-500">
            New Password
          </label>
          <input
            type="password"
            id="new_password"
            className="wphub-input mt-1 w-full"
          />
        </div>
        <div className="mt-3">
          <label for="confirm_password" className="block text-gray-500">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            className="wphub-input mt-1 w-full"
          />
        </div>
        <div className="flex mt-3 justify-end">
          <button className="wphub-btn-primary min-w-[100px]">Save</button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mt-4">
        <h3 className="text-gray-700 font-normal">Two Factor Authentication</h3>
        <div className="mt-3">
          <p className="text-gray-700 text-xs">
            You have not enabled two factor authentication.
          </p>
          <span className="text-gray-500 mt-3 text-xs">
            When two factor authentication is enabled, you will be prompted for
            a secure, random token during authentication. You may retrieve this
            token from your phone's Google Authenticator application.
          </span>
        </div>
        <div className="flex mt-3 justify-end">
          <button className="wphub-btn-primary min-w-[100px]">Enable</button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mt-4">
        <h3 className="text-gray-700 font-normal">Browser Sessions</h3>
        <div className="mt-3">
          <p className="text-gray-700 text-xs">
            Manage and log out your active sessions on other browsers and
            devices.
          </p>
          <span className="text-gray-500 mt-3 text-xs">
            If necessary, you may log out of all of your other browser sessions
            across all of your devices. Some of your recent sessions are listed
            below; however, this list may not be exhaustive. If you feel your
            account has been compromised, you should also update your password.
          </span>
        </div>
        <div className="flex mt-3 justify-end">
          <button className="wphub-btn-primary min-w-[100px]">
            Log Out Other Browser Sessions
          </button>
        </div>
      </div>
    </LeftSidebarLayout>
  );
}

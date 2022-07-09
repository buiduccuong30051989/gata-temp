import { AuthLayout } from "components/Layout";
import { Tab } from "@headlessui/react";
import { Modal } from "components/Modal";
import { HiOutlineCollection, HiOutlineTemplate } from "react-icons/hi";
import { classNames } from "utils/helper";
import { PrivateTab } from "./privateTab";

export default function Templates() {
  return (
    <AuthLayout>
      <div>
        <div>
          <div className="flex justify-between w-full">
            <h2 className="forge-h2">Templates</h2>
          </div>

          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-300/50 p-1 w-[280px] mt-3 mx-auto">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm leading-5 font-normal text-gray-700 flex items-center justify-center",
                    selected
                      ? "bg-active-link shadow text-teal-400"
                      : "hover:bg-white/[0.35]"
                  )
                }
              >
                <HiOutlineCollection className="w-4 h-4 mr-2" />
                Private (2)
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm leading-5 font-normal text-gray-700 flex items-center justify-center",
                    selected
                      ? "bg-active-link shadow text-teal-400"
                      : "hover:bg-white/[0.35]"
                  )
                }
              >
                <HiOutlineTemplate className="w-4 h-4 mr-2" />
                Share (1)
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <PrivateTab />
              </Tab.Panel>
              <Tab.Panel></Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </AuthLayout>
  );
}

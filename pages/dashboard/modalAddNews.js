import { useState } from "react";
import { Tab, RadioGroup } from "@headlessui/react";
import { Modal } from "components/Modal";
import {
  HiOutlineCollection,
  HiOutlineTemplate,
  HiOutlineFlag,
  HiOutlineClock,
  HiOutlineCheck,
} from "react-icons/hi";
import randomWords from "random-words";

const mockDataScratchField = [
  "Choose WP version",
  "Choose PHP version",
  "Choose Configuration",
];

const mockDataScratchOptions = [
  "General PHP / Laravel",
  "Laravel Octane",
  "Static HTML",
  "Symfony &lt; 4.0",
  "Symfony (Dev) &lt; 4.0",
  "Symfony &gt;= 4.0",
];

const planOptions = [
  {
    title: "Temporary Site",
    value: "temporary",
    desc: "Expires in 7 days",
  },
  {
    title: "Reserved Site",
    value: "reserved",
    desc: "Does not expire",
  },
];

export const ModalAddNews = ({ isOpen, closeModal }) => {
  const [generateWord, setGenerateWord] = useState("");
  const [plan, setPlan] = useState("temporary");
  const [template, setTemplate] = useState(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleGenerateWord = (e) => {
    e.preventDefault();
    const word = randomWords();
    setGenerateWord(word);
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      panelClassName="w-full max-w-md transform overflow-hidden bg-white rounded-2xl  text-left align-middle shadow-xl transition-all"
    >
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
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
            From Scratch
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
            From Template
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="px-4 py-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Setup your new site
              </h3>
              <h6 className="pt-2 launch_text">
                ⚡ Use default settings for blazing fast launch
              </h6>
              <form>
                <div className="mt-8">
                  {mockDataScratchField.map((item) => (
                    <div className="mt-4" key={item}>
                      <label
                        htmlFor={item}
                        className="block text-sm font-light text-gray-900"
                      >
                        {item}
                      </label>
                      <select
                        className="forge-input mt-1 block w-full"
                        name={item}
                      >
                        {mockDataScratchOptions.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <div className="mb-4 mt-4">
                    <label
                      htmlFor="site_name"
                      className="block text-sm font-light text-gray-900"
                    >
                      Site Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="site_name"
                        placeholder="Keep blank for instant random site."
                        autoComplete="site-name"
                        className="forge-input mt-1 block w-full pr-20"
                        value={generateWord}
                        onChange={() => {}}
                      />
                      <button
                        onClick={handleGenerateWord}
                        className="absolute right-0 top-0 h-full px-4"
                      >
                        Generate
                      </button>
                    </div>
                  </div>

                  <RadioGroup value={plan} onChange={setPlan}>
                    <RadioGroup.Label>Plan</RadioGroup.Label>
                    <div className="flex w-full items-center justify-between mb-3 space-x-4 mt-2">
                      {planOptions.map((item) => (
                        <RadioGroup.Option
                          value={item.value}
                          key={item.value}
                          className="w-full"
                        >
                          {({ checked }) => (
                            <div
                              className={`text-sm rounded-lg w-full items-center relative shadow-sm px-5 py-2 flex cursor-pointer ${
                                checked ? "bg-teal-50" : "bg-gray-100"
                              }`}
                            >
                              <div>
                                {Boolean(
                                  item.value === planOptions[0].value
                                ) && (
                                  <HiOutlineClock
                                    className={`w-5 h-5 ${
                                      checked ? "text-teal-400" : ""
                                    }`}
                                  />
                                )}

                                {Boolean(
                                  item.value === planOptions[1].value
                                ) && (
                                  <HiOutlineFlag
                                    className={`w-5 h-5 ${
                                      checked ? "text-teal-400" : ""
                                    }`}
                                  />
                                )}
                              </div>
                              <div className="text-left pl-3">
                                <span
                                  className={`block my-0.5 text-sm font-normal ${
                                    checked ? "text-teal-400" : ""
                                  }`}
                                >
                                  {item.title}
                                </span>
                                <div>
                                  <span className="block text-gray-500 text-xs font-normal">
                                    {item.desc}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className=" py-3">
              <div className="customized-scrollbar h-[255px] overflow-y-auto">
                <RadioGroup value={template} onChange={setTemplate}>
                  {"cuongbeodepzaihocgioi".split("").map((item, index) => (
                    <RadioGroup.Option
                      value={`${item}-${index}`}
                      key={`${item}-${index}`}
                    >
                      {({ checked }) => (
                        <div
                          className={`flex items-center py-2 px-4 cursor-pointer  ${
                            checked ? "bg-teal-50" : "hover:bg-gray-100"
                          }`}
                        >
                          <div className="flex items-center justify-center rounded-full">
                            <label
                              className={`inline-flex flex-shirk-0 w-12 h-12 justify-center text-lg font-normal rounded-full items-center text-white uppercase ${
                                checked ? "bg-teal-400" : "bg-gray-500/50"
                              }`}
                            >
                              {Boolean(checked) ? (
                                <HiOutlineCheck
                                  className={`w-6 h-6 text-white`}
                                />
                              ) : (
                                <span>{item}</span>
                              )}
                            </label>
                          </div>
                          <div className="inline-block pl-3 pr-20">
                            <h4
                              className={`font-normal ${
                                checked ? "text-teal-400" : "text-gray-700"
                              }`}
                            >
                              duc
                            </h4>
                            <p className="text-sm text-gray-500 mb-0">
                              abc xyz 123445
                            </p>
                          </div>
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
              </div>

              <div className="mb-3 mt-4 px-4">
                <label
                  htmlFor="site_name"
                  className="block text-sm font-light text-gray-900"
                >
                  Site Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="site_name"
                    placeholder="Keep blank for instant random site."
                    autoComplete="site-name"
                    className="forge-input mt-1 block w-full pr-20"
                    value={generateWord}
                  />
                  <button
                    onClick={handleGenerateWord}
                    className="absolute right-0 top-0 h-full px-4"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <div className="py-4 px-4 flex space-x-4">
            <button
              type="button"
              className="forge-btn-secondary bg-gray-100 w-full"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
            <button type="submit" className="forge-btn-primary w-full">
              Create Site
            </button>
          </div>
        </Tab.Panels>
      </Tab.Group>
    </Modal>
  );
};

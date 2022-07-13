import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Modal } from "components/Modal";
import randomWords from "random-words";
import { HiOutlineClock, HiOutlineFlag } from "react-icons/hi";

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

export const ModalCreateTemplate = ({ isOpen, closeModal }) => {
  const [generateWord, setGenerateWord] = useState("");
  const [plan, setPlan] = useState("temporary");

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
      modalTitle="Create a new from template"
    >
      <div className=" pb-3">
        <div className="mb-3 px-4">
          <p>
            Pro tip: Mark this template as "Instant Template" for instant site
            creation.
          </p>
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
              className="wphub-input mt-1 block w-full pr-20"
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
        <div className="mb-3 mt-4 px-4">
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
                        checked ? "bg-primary-50" : "bg-gray-100"
                      }`}
                    >
                      <div>
                        {Boolean(item.value === planOptions[0].value) && (
                          <HiOutlineClock
                            className={`w-5 h-5 ${
                              checked ? "text-primary-400" : ""
                            }`}
                          />
                        )}

                        {Boolean(item.value === planOptions[1].value) && (
                          <HiOutlineFlag
                            className={`w-5 h-5 ${
                              checked ? "text-primary-400" : ""
                            }`}
                          />
                        )}
                      </div>
                      <div className="text-left pl-3">
                        <span
                          className={`block my-0.5 text-sm font-normal ${
                            checked ? "text-primary-400" : ""
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
      </div>
      <div className="py-4 px-4 flex space-x-4">
        <button
          type="button"
          className="wphub-btn-secondary bg-gray-100 w-full"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
        <button type="submit" className="wphub-btn-primary w-full">
          Create Site
        </button>
      </div>
    </Modal>
  );
};

import { useState } from "react";
import { Modal } from "components/Modal";
import randomWords from "random-words";
import { phpConfig } from "constant/data";

export const ModalPhpConfiguration = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      panelClassName="w-full max-w-sm transform overflow-hidden bg-white rounded-2xl  text-left align-middle shadow-xl transition-all"
      modalTitle="Create a new from template"
    >
      <div className="px-4 py-2 space-y-4">
        {phpConfig.map((item, index) => (
          <div key={item.title} className="flex items-center">
            <label
              htmlFor={item.label}
              className="text-gray-700  mr-5 w-[220px]"
            >
              <p>{item.label}</p>
              {Boolean(item.unit) && <small>({item.unit})</small>}
            </label>
            <div className="flex-grow">
              <input
                autoComplete="off"
                type="number"
                id={item.title}
                className="wphub-input pr-2 w-full"
                tabIndex={index}
                defaultValue={item.defaultValue}
              />
            </div>
          </div>
        ))}
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
          Update
        </button>
      </div>
    </Modal>
  );
};

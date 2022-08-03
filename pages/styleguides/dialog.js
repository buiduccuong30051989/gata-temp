import { useState } from "react";
import StyleGuidesPage from ".";
import { HlDialog as Dialog } from "components";
import { HiCog } from "react-icons/hi";
import { TextField, TextArea, Select, HlRadio, Switch } from "components";
import { useDisclosure } from "hooks";

const options = [
  {
    label: "General PHP / Laravel",
    value: "php",
  },
  {
    label: "Laravel Octane",
    value: "octane",
  },
  {
    label: "Static HTML",
    value: "html",
  },
];

export default function Alert() {
  const { isOpen, open, close } = useDisclosure();
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Dialog</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Dialog Demo</p>
              <div className="styleguides-buttons-list">
                <button
                  onClick={open}
                  type="button"
                  className={`button is-info`}
                >
                  Open Simple Dialog
                </button>
                <Dialog
                  title="Ut commodo reprehenderit aliqua irure nulla."
                  isOpen={isOpen}
                  onClose={close}
                  okText="Submit Form"
                >
                  <div className="p-4">
                    <div className="flex flex-col">
                      <TextField
                        label="Simple Text Input"
                        placeholder="Placeholder..."
                        helperText="Helper text also error text!"
                        onChange={setValue}
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <TextArea
                        label="Simple TextArea "
                        placeholder="Placeholder..."
                        helperText="Helper text also error text!"
                        onChange={setValue}
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <Select
                        label="Simple Select "
                        placeholder="Placeholder..."
                        options={options}
                        onChange={setValue}
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <div className="form-control">
                        <label>Upload files</label>
                        <div className="file has-name">
                          <label className="file-label">
                            <input
                              className="file-input"
                              type="file"
                              name="resume"
                            />
                            <span className="file-cta">
                              <span className="file-icon">
                                <HiCog />
                              </span>
                              <span className="file-label">Select file</span>
                            </span>
                            <span className="file-name">
                              Select a file to upload
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-4">
                      <Switch
                        label="Payment COD"
                        enabled={checked}
                        setEnabled={setChecked}
                        reverse
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <HlRadio
                        onChange={setValue}
                        label="Group radio headless ui - BLOCK"
                        options={options}
                        value={value}
                      />
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Alert.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

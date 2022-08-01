import { useState } from "react";
import StyleGuidesPage from ".";
import { HiCog } from "react-icons/hi";
import {
  TextField,
  TextArea,
  Select,
  Checkbox,
  Radio,
  HlRadio,
  Switch,
  HlSelect,
} from "components";
import { BASE_SCHEMA } from "constant/common";

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

export default function Forms() {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  console.log({ value });
  console.log({ checked });

  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Forms</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Form Elements</p>

              <div className="flex flex-col mt-4">
                <div className="file has-name is-right">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
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

              <div className="flex flex-col mt-4">
                <TextField
                  label="Simple Text Input"
                  placeholder="Placeholder..."
                  helperText="Helper text also error text!"
                  onChange={setValue}
                />
              </div>

              <div className="flex flex-col mt-4">
                <TextField
                  label="Simple Text Input"
                  placeholder="Placeholder..."
                  helperText="Helper text also error text!"
                  onChange={setValue}
                  error
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
                  helperText="Helper text also error text!"
                  options={options}
                  onChange={setValue}
                />
              </div>

              <div className="flex flex-col mt-4">
                <HlSelect
                  label="Headless ui select"
                  options={options}
                  onChange={setValue}
                  value={value}
                  placeholder="Select options"
                />
              </div>

              <div className="flex flex-col mt-4">
                <Checkbox
                  onChange={() => setChecked((prev) => !prev)}
                  label="Checkbox label"
                  checked={checked}
                />
              </div>

              <div className="flex flex-col mt-4">
                <Radio
                  label="Single radio label"
                  checked={checked}
                  onChange={() => setChecked((prev) => !prev)}
                />
              </div>

              <div className="flex mt-4">
                <Switch enabled={checked} setEnabled={setChecked} />
              </div>

              <div className="flex flex-col mt-4">
                <HlRadio
                  onChange={setValue}
                  label="Group radio headless ui - INLINE"
                  options={options}
                  value={value}
                  className="inline"
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

              <div className="flex flex-col mt-4">
                <TextField
                  label="Error Form Element"
                  error
                  placeholder="Placeholder..."
                  helperText="Helper text also error text!"
                />
              </div>

              <div className="flex flex-col mt-4">
                <TextField
                  label="Disabled Form Element"
                  disabled
                  placeholder="Placeholder..."
                  helperText="Helper text also error text!"
                />
              </div>

              <div className="form-control mt-4">
                <label>Inline Input & Button</label>
                <div className="flex flex-col mt-1">
                  <div className="flex w-full">
                    <input type="text" className="wphub-input mr-1 w-full" />
                    <div className="flex justify-center">
                      <button type="button" className="wphub-btn-secondary">
                        <HiCog className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Forms.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

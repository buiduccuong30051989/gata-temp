import StyleGuidesPage from ".";
import { HiCog } from "react-icons/hi";

export default function Forms() {
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
                <label>Text Input</label>
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
                <label>Options Select</label>
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

              <div className="flex flex-col mt-4">
                <label>Inline Input & Button</label>
                <div className="flex flex-col mt-1">
                  <div className="flex w-full">
                    <input type="text" className="forge-input mr-1 w-full" />
                    <div className="flex justify-center">
                      <button type="button" className="forge-btn-secondary">
                        <HiCog className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label>TextArea</label>
                <div className="flex flex-col mt-1">
                  <textarea
                    className="forge-input"
                    rows={10}
                    placeholder="ssh-rsa AAAAB3NzaC1yc2EA... testforge@tests-macbook-pro.local"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="forge-checkbox" />
                  <span className="pl-2">Checkbox</span>
                </label>
              </div>

              <div className="flex flex-col mt-4">
                <label className="flex items-center">
                  <input type="radio" className="forge-radio" />
                  <span className="pl-2">Radio</span>
                </label>
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

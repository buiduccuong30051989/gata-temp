import StyleGuidesPage from ".";
import { BASE_SCHEMA } from "constant/common";
import { HiOutlineArchive } from "react-icons/hi";
export default function Buttons() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Buttons</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Buttons</p>
              <div className="styleguides-buttons-list">
                {BASE_SCHEMA.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item} is-regular `}
                    >
                      <span className="icon">
                        <HiOutlineArchive />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {BASE_SCHEMA.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item} is-regular `}
                    >
                      <span className="icon">
                        <HiOutlineArchive />
                      </span>
                      <span>Button with icon</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {BASE_SCHEMA.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item} is-regular `}
                    >
                      <span>Button with icon</span>
                      <span className="icon">
                        <HiOutlineArchive />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {BASE_SCHEMA.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item}`}
                    >{`button-${item}`}</button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {BASE_SCHEMA.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item} is-regular`}
                    >{`button-${item}`}</button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {BASE_SCHEMA.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item} is-minimal`}
                    >{`button-${item}`}</button>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="styleguides-group-item">
                <p className="styleguides-group-item-title">Buttons Light Colors</p>
                <div className="styleguides-buttons-list">
                  <template x-for="key in SCHEMAS" :key="key" />
                </div>
              </div>
              <div className="styleguides-group-item">
                <p className="styleguides-group-item-title">Buttons Size</p>
                <div className="styleguides-buttons-list">
                  <template x-for="key in ['small', 'normal', 'medium', 'large']" :key="key" />
                </div>
              </div>
              <div className="styleguides-group-item">
                <p className="styleguides-group-item-title">Buttons Outline</p>
                <div className="styleguides-buttons-list">
                  <template x-for="key in SCHEMAS" :key="key" />
                </div>
              </div>
              <div className="styleguides-group-item">
                <p className="styleguides-group-item-title">Buttons Rounded</p>
                <div className="styleguides-buttons-list">
                  <template x-for="key in SCHEMAS" :key="key" />
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

Buttons.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

import StyleGuidesPage from ".";
import STYLEGUIDES from "constant/styleguides.json";
const SCHEMAS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "white",
  "black",
  "light",
  "dark",
];

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
              <p className="styleguides-group-item-title">Buttons Theme Type</p>
              <div className="styleguides-buttons-list">
                <div className="buttons-item">
                  <button type="button" className="forge-btn-primary">
                    Button Forge Primary
                  </button>
                </div>
                <div className="buttons-item">
                  <button type="button" className="forge-btn-secondary">
                    Button Forge Secondary
                  </button>
                </div>
              </div>
            </div>
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Buttons Colors</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      type="button"
                      className={`button is-${item}`}
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

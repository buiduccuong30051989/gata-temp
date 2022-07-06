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

export default function Tags() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Tags</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Tags Colors</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div key={item} className="buttons-item">
                    <span
                      type="button"
                      className={`ct-tag is-${item}`}
                    >{`tag-${item}`}</span>
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

Tags.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

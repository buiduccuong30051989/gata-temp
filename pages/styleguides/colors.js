import StyleGuidesPage from ".";
import STYLEGUIDES from "constant/styleguides.json";

export default function Colors() {
  return (
    <div className="styleguides-block" id="Colors">
      <div className="layer-x"></div>
      <div className="layer-y"></div>
      <div className="layer-top">Colors</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg"></div>
          <div className="styleguides-group">
            {Object.keys(STYLEGUIDES.colors).map((key, index) => (
              <div key={index} className="styleguides-group-item">
                <p className="styleguides-group-item-title"></p>
                <div className="styleguides-colors-list">
                  {typeof STYLEGUIDES.colors[key] === "string" && (
                    <div className={`color-item bg-${key}`}></div>
                  )}
                  {typeof STYLEGUIDES.colors[key] === "object" &&
                    Object.keys(STYLEGUIDES.colors[key]).map(
                      (subKey, index) => (
                        <div
                          key={index}
                          className={`color-item bg-${key}-${subKey}`}
                        ></div>
                      )
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Colors.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

import StyleGuidesPage from ".";
const SCHEMAS = ["success", "info", "warning", "danger"];
import { Chip } from "components/Chip";

export default function Chips() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Chips</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Chip Types</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <Chip
                    key={item}
                    type={item}
                    content={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Chips.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

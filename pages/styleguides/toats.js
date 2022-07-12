import StyleGuidesPage from ".";
const SCHEMAS = ["success", "info", "warning", "danger", "normal"];
// import { toast } from "react-toastify";
import {
  toatsSuccess,
  toatsDanger,
  toatsInfo,
  toatsWarning,
} from "components/Toats";

export default function Toats() {
  const handleShowToats = (type) => {
    switch (type) {
      case "success":
        toatsSuccess({
          content: "Success notify toat!",
        });
        break;
      case "info":
        toatsInfo({
          content: "Information notify toat!",
        });
        break;
      case "warning":
        toatsWarning({
          content: "Warning notify toat!",
        });
        break;
      case "danger":
        toatsDanger({
          content: "Danger notify toat!",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Alert</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Alert Types</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      onClick={() => handleShowToats(item)}
                      type="button"
                      className={`button bg-${item}-400`}
                    >{`toats-${item}`}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Toats.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

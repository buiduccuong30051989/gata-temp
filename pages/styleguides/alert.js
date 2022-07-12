import StyleGuidesPage from ".";
const SCHEMAS = ["success", "info", "warning", "danger", "normal"];
import { showAlert, alertParams } from "components/Alert";

export default function Buttons() {
  const handleShowAlert = (type) => {
    if (type !== "danger") {
      showAlert({
        ...alertParams[type],
        title: "Ullamco est deserunt enim laborum",
        description:
          "Ullamco est deserunt enim laborum aliqua proident et eiusmod magna pariatur.",
        cancelText: "Cancel",
        okText: "Apply Changes"
      });
    } else {
      showAlert({
        ...alertParams.danger(),
        title: "Ullamco est deserunt enim laborum",
        description:
          "Ullamco est deserunt enim laborum aliqua proident et eiusmod magna pariatur.",
        cancelText: "Cancel",
        okText: "Apply Changes"
      });
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
                      onClick={() => handleShowAlert(item)}
                      type="button"
                      className={`button bg-${item}-400`}
                    >{`alert-${item}`}</button>
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

Buttons.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

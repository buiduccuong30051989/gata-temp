import StyleGuidesPage from ".";
const SCHEMAS = ["success", "info", "warning", "danger"];
import {
  toatsSuccess,
  toatsDanger,
  toatsInfo,
  toatsWarning,
} from "components/Toats";
import { ToastInline } from "components/ToastInline";

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

  const handleShowToatsDescription = (type) => {
    switch (type) {
      case "success":
        toatsSuccess({
          content: "Success notify toat!",
          autoClose: 50000,
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
        });
        break;
      case "info":
        toatsInfo({
          content: "Information notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
        });
        break;
      case "warning":
        toatsWarning({
          content: "Warning notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
        });
        break;
      case "danger":
        toatsDanger({
          content: "Danger notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
        });
        break;
      default:
        break;
    }
  };

  const handleShowToatsLight = (type) => {
    switch (type) {
      case "success":
        toatsSuccess({
          content: "Success notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
          className: "toast-light",
        });
        break;
      case "info":
        toatsInfo({
          content: "Information notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
          className: "toast-light",
        });
        break;
      case "warning":
        toatsWarning({
          content: "Warning notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
          className: "toast-light",
        });
        break;
      case "danger":
        toatsDanger({
          content: "Danger notify toat!",
          description:
            "Incididunt labore tempor fugiat cupidatat ex proident culpa anim eiusmod deserunt et.",
          className: "toast-light",
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
      <div className="layer-top">Toats</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Toats Types</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      onClick={() => handleShowToats(item)}
                      type="button"
                      className={`button is-${item} is-regular`}
                    >{`toats-${item}`}</button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      onClick={() => handleShowToatsDescription(item)}
                      type="button"
                      className={`button is-${item} is-regular`}
                    >{`toats ${item} with description`}</button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div key={item} className="buttons-item">
                    <button
                      onClick={() => handleShowToatsLight(item)}
                      type="button"
                      className={`button is-${item} is-minimal`}
                    >{`toats ${item} light`}</button>
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div className="mb-3 w-full">
                    <ToastInline
                      type={item}
                      content="Consectetur deserunt ad minim est occaecat mollit dolore consectetur tempor veniam mollit id enim."
                    />
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div className="w-full">
                    <ToastInline
                      className="border-less"
                      type={item}
                      content="Consectetur deserunt ad minim est occaecat mollit dolore consectetur tempor veniam mollit id enim."
                    />
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div className="w-full">
                    <ToastInline
                      className="toast-light"
                      type={item}
                      content="Consectetur deserunt ad minim est occaecat mollit dolore consectetur tempor veniam mollit id enim."
                    />
                  </div>
                ))}
              </div>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <div className="mb-3">
                    <ToastInline
                      type={item}
                      content="Toast Title"
                      description="Officia consequat proident laborum non ipsum nisi. Esse incididunt incididunt fugiat dolore cillum. Veniam sunt in Lorem minim adipisicing cillum laboris et id magna. Labore reprehenderit nisi exercitation irure reprehenderit sunt."
                    />
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

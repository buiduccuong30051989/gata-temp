import StyleGuidesPage from ".";
const SCHEMAS = ["success", "info", "warning", "danger"];
import { Feedback } from "components/Feedback";

export default function FeedbackAlert() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Feedback</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Feedback Types</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <Feedback
                    key={item}
                    type={item}
                    title="Culpa Lorem in quis sint"
                    description="Culpa Lorem in quis sint ea commodo consectetur commodo elit aute sunt laboris dolor."
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

FeedbackAlert.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

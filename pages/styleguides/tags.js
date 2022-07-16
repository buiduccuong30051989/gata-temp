import StyleGuidesPage from ".";
import { Tag } from "components/Tag";
import { BASE_SCHEMA } from "constant/common";
const SCHEMAS = [
  ...BASE_SCHEMA,
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
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
              <p className="styleguides-group-item-title">Tag Types</p>
              <div className="styleguides-buttons-list">
                {SCHEMAS.map((item) => (
                  <Tag
                    key={item}
                    className="buttons-item"
                    content={`tag-${item}`}
                    type={item}
                  ></Tag>
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

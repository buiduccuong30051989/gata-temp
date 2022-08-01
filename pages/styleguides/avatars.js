import StyleGuidesPage from ".";
import Avatar from "react-avatar";
import { StackAvatars } from "components";
const NAMES = [
  "Mara Harrington",
  "Cristopher Munoz",
  "Dominique Caldwell",
  "Case Giles",
  "Chana Alexander",
  "Michelle Walker",
  "Zachary Shaw",
  "Frederick Mack",
  "Maria Bowen",
  "Danna Osborn",
  "Jalen Solis",
  "Annabel Montes",
];

export default function Avatars() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Avatars</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item">
              <p className="styleguides-group-item-title">Avatar Types</p>
              <div className="styleguides-buttons-list">
                {NAMES.map((item) => (
                  <Avatar
                    key={item}
                    name={item}
                    size={32}
                    round={3}
                    initials={2}
                  />
                ))}
              </div>

              <div className="styleguides-buttons-list mt-4">
                {NAMES.map((item) => (
                  <Avatar
                    key={item}
                    name={item}
                    size={32}
                    round="100%"
                    initials={2}
                  />
                ))}
              </div>

              <div className="styleguides-buttons-list mt-4">
                <div className="-space-x-4 z-0">
                  <StackAvatars
                    names={NAMES}
                    size={32}
                    round="100%"
                    initials={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Avatars.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

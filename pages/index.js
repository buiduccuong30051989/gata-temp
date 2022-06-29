import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import STYLEGUIDES from "../constant/styleguides.json";

export default function Home() {
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
  const ELEMENTS = ["Buttons", "Icons", "Badges", "Contents"];
  const COMPONENTS = ["Cards"];
  const FORMS = ["General", "Input", "Textarea", "Select", "Checkbox", "Radio"];

  return (
    <div className="p-styleguides py-16">
      <div
        className="fixed inset-0 -z-0 dark:hidden"
        style={{
          background: `url("https://beyondco.de/img/monotone_open_source.png") calc(100% + 0px) -140px / 100% 400px no-repeat`
        }}
      ></div>
      <div className="b-styleguides-sidebar">
        <nav className="b-styleguides-nav">
          <div className="nav-group">
            <h5 className="nav-title">Customization</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Colors
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Screens
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Spacing
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Layout</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Aspect Ratio
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Z-Index
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Flexbox & Grid</h5>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Typography</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Font Family
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Font Sizes
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Font Weight
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Line Height
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  List Style Type
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Backgrounds</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Background Image
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Borders</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Border Radius
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Effects</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Box Shadow
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Opacity
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Filters</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Blur
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Drop Shadow
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Backdrop Blur
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Blur
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Tables</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Border Collapse
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Table Layout
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Transitions & Animation</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Animation
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Transforms</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Rotate
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Translate
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Interactivity</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Accent Color
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Pointer Events
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Cursor
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Scroll Behavior
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Scroll Margin
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Scroll Padding
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Scroll Snap Align
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Scroll Snap Stop
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Scroll Snap Type
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  User Select
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">SVG</h5>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-list-link">
                  Fill
                </a>
              </li>
              <li>
                <a href="#" className="nav-list-link">
                  Stroke
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="b-styleguides-nav">
          <div className="nav-group">
            <h5 className="nav-title">Elements</h5>
            <ul className="nav-list">
              {ELEMENTS.map((item, index) => (
                <li key={index}>
                  <a href="#" className="nav-list-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Components</h5>
            <ul className="nav-list">
              {COMPONENTS.map((item, index) => (
                <li key={index}>
                  <a href="#" className="nav-list-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Forms</h5>
            <ul className="nav-list">
              {FORMS.map((item, index) => (
                <li key={index}>
                  <a href="#" className="nav-list-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="b-styleguides-content">
        {/* START COLOR  */}
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
        {/* END COLOR */}
      </div>
    </div>
  );
}

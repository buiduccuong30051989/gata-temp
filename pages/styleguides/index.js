// import STYLEGUIDES from "constant/styleguides.json";

import Link from "next/link";
import { ToastContainer, Slide } from "react-toastify";

export default function StyleGuidesPage({ children }) {
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
  const ELEMENTS = ["Buttons", "Icons", "Tags", "Badges", "Chips"];
  const COMPONENTS = ["Cards", "Alert", "Toats", "Feedback", "Menu", "Dropdown"];
  const FORMS = ["Forms"];

  return (
    <div className="p-styleguides py-16">
      <div
        className="fixed inset-0 -z-0 dark:hidden"
        style={{
          background: `url("https://beyondco.de/img/monotone_open_source.png") calc(100% + 0px) -140px / 100% 400px no-repeat`,
        }}
      ></div>
      <div className="b-styleguides-sidebar">
        <nav className="b-styleguides-nav">
          <div className="nav-group">
            <h5 className="nav-title">Customization</h5>
            <ul className="nav-list">
              <li>
                <Link href="/styleguides/colors">
                  <a className="nav-list-link">Colors</a>
                </Link>
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
                  <Link href={`/styleguides/${item.toLowerCase()}`}>
                    <a className="nav-list-link">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Components</h5>
            <ul className="nav-list">
              {COMPONENTS.map((item, index) => (
                <li key={index}>
                  <Link href={`/styleguides/${item.toLowerCase()}`}>
                    <a className="nav-list-link">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-group">
            <h5 className="nav-title">Forms</h5>
            <ul className="nav-list">
              {FORMS.map((item, index) => (
                <li key={index}>
                  <Link href={`/styleguides/${item.toLowerCase()}`}>
                    <a className="nav-list-link">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="b-styleguides-content">{children}</div>
      <div id="alert" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
}

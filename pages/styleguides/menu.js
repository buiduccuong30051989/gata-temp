import StyleGuidesPage from ".";
import { Dropdown } from "components";
import {
  HiOutlineChartSquareBar,
  HiOfficeBuilding,
  HiOutlineAcademicCap,
  HiAdjustments,
  HiAnnotation,
  HiTrash,
} from "react-icons/hi";

const MY_PLAN_MOCK_DATA = [
  {
    title: "Disk Usage",
    icon: <HiOutlineChartSquareBar />,
  },
  {
    title: "Sites",
    icon: <HiOfficeBuilding />,
  },
  {
    title: "Template Sites",
    icon: <HiAdjustments />,
  },
  {
    title: "Git Operation Quota",
    icon: <HiAnnotation />,
  },
];

const MyPlan = () => (
  <div>
    {MY_PLAN_MOCK_DATA.map((item) => (
      <div key={item.title} className="gata-dropdown-item">
        <span>{item.title}</span>
      </div>
    ))}
  </div>
);

const MyMenu = () => (
  <div>
    {MY_PLAN_MOCK_DATA.map((item) => (
      <div key={item.title} className="gata-dropdown-item">
        <div className="mr-2">{item.icon}</div>
        <span>{item.title}</span>
      </div>
    ))}
    <hr className="dropdown-divider" />
    <div className="gata-dropdown-item text-danger-900 font-medium">
      <div className="mr-2">
        <HiTrash />
      </div>
      <span>Delete</span>
    </div>
  </div>
);

export default function Menu() {
  return (
    <div className="styleguides-block">
      <div className="layer-x" />
      <div className="layer-y" />
      <div className="layer-top">Menu</div>
      <div className="layer-content">
        <div className="layer-content-inner">
          <div className="layer-bg" />
          <div className="styleguides-group">
            <div className="styleguides-group-item h-48">
              <div className="flex justify-center space-x-8">
                <Dropdown
                  btnChildren={
                    <span className="icon">
                      <HiOfficeBuilding className="w-5 text-gray-800 h-5" />
                    </span>
                  }
                  btnClass="button is-regular"
                  dropdownChildren={<MyMenu />}
                  arrow={false}
                  width="w-48"
                />

                <Dropdown
                  btnChildren={
                    <span className="icon">
                      <HiOutlineChartSquareBar className="w-5 text-gray-800 h-5" />
                    </span>
                  }
                  btnClass="button is-regular"
                  dropdownChildren={<MyPlan />}
                  arrow={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Menu.getLayout = function getLayout(page) {
  return <StyleGuidesPage>{page}</StyleGuidesPage>;
};

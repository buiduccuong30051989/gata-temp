import StyleGuidesPage from ".";
import { HlMenu, Dropdown } from "components";
import { HiOutlineChartSquareBar } from "react-icons/hi";

const options = [
  { label: "View Creds", path: "/" },
  { label: "Migrate", path: "/" },
  { label: "Export As", path: "/" },
];

const MY_PLAN_MOCK_DATA = [
  {
    title: "Disk Usage",
    count: "108.92/5000",
    percent: "2",
  },
  {
    title: "Sites",
    count: "1/15",
    percent: "7",
  },
  {
    title: "Restore Quota",
    count: "1/10",
    percent: "10",
  },
  {
    title: "Template Sites",
    count: "0/10",
    percent: "0",
  },
  {
    title: "Git Operation Quota",
    count: "0/500",
    percent: "0",
  },
];

const MyPlan = () => (
  <div>
    <div className=" flex justify-between p-2 text-base text-gray-900 ">
      <div className="leading-none">
        <a className=" text-right text-blue-600 text-sm leading-none " href="#">
          My Plan
        </a>
      </div>
    </div>
    <div>
      {MY_PLAN_MOCK_DATA.map((item) => (
        <div
          key={item.title}
          className=" block p-2 text-sm leading-5 text-gray-700 "
        >
          <span>{item.title}</span>
          <span className="float-right">{item.count}</span>
          <div className="relative pt-1">
            <div className=" overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200 ">
              <div
                className="bg-brands-primary shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        </div>
      ))}
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
              <div className="flex justify-end space-x-4">
                <HlMenu
                  label="Menu Button"
                  width="w-36"
                  arrow
                  options={options}
                />
                <HlMenu
                  label="Menu Button"
                  width="w-36"
                  btnClass="wphub-btn-primary"
                  arrow
                  options={options}
                />
                <Dropdown
                  btnChildren={
                    <HiOutlineChartSquareBar className="w-5 text-gray-800 h-5" />
                  }
                  dropdownChildren={<MyPlan />}
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

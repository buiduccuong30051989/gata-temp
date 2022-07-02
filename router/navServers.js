import {
  HiOutlineGlobeAlt,
  HiOutlineDatabase,
  HiOutlineKey,
  HiOutlineTerminal,
  HiOutlineShieldCheck,
  HiOutlineDesktopComputer,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineTemplate,
  HiOutlineCalendar,
  HiOutlineLightningBolt,
  HiOutlineWifi,
  HiOutlineClipboardList,
  HiOutlineCollection,
  HiOutlineTag,
  HiOutlinePuzzle,
  HiOutlineLockClosed,
  HiOutlineCog,
} from "react-icons/hi";
import { BsFillTreeFill } from "react-icons/bs";
import { BiDirections } from "react-icons/bi";
import { IconPhp } from "components/icons";

export const navServer = [
  {
    title: "Sites",
    icon: <HiOutlineGlobeAlt />,
    path: "sites",
  },
  {
    title: "Database",
    icon: <HiOutlineDatabase />,
    path: "database",
  },
  {
    title: "SSH Keys",
    icon: <HiOutlineKey />,
    path: "keys",
  },
  {
    title: "Monitoring",
    icon: <HiOutlineDesktopComputer />,
    path: "sites",
  },
  {
    title: "Backups",
    icon: <HiOutlineCube />,
    path: "sites",
  },
  {
    title: "PHP",
    icon: <IconPhp />,
    path: "sites",
  },
  {
    title: "Packages",
    icon: <HiOutlineTruck />,
    path: "sites",
  },
  {
    title: "Nginx Templates",
    icon: <HiOutlineTemplate />,
    path: "sites",
  },
  {
    title: "Scheduler",
    icon: <HiOutlineCalendar />,
    path: "sites",
  },
  {
    title: "Daemons",
    icon: <HiOutlineLightningBolt />,
    path: "sites",
  },
  {
    title: "Network",
    icon: <HiOutlineWifi />,
    path: "sites",
  },
  {
    title: "Logs",
    icon: <HiOutlineClipboardList />,
    path: "sites",
  },
  {
    title: "Events",
    icon: <HiOutlineCollection />,
    path: "sites",
  },
  {
    title: "Integrations",
    icon: <HiOutlinePuzzle />,
    path: "sites",
  },
  {
    title: "Meta",
    icon: <HiOutlineTag />,
    path: "sites",
  },
];

export const sitesServer = [
  {
    title: "App",
    icon: <HiOutlineTemplate />,
    path: "app",
  },
  {
    title: "Commands",
    icon: <HiOutlineTerminal />,
    path: "database",
  },
  {
    title: "Packages",
    icon: <HiOutlineTruck />,
    path: "keys",
  },
  {
    title: "Environment",
    icon: <BsFillTreeFill />,
    path: "sites",
  },
  {
    title: "Queue",
    icon: <HiOutlineCog />,
    path: "sites",
  },
  {
    title: "SSL",
    icon: <HiOutlineLockClosed />,
    path: "sites",
  },
  {
    title: "Security",
    icon: <HiOutlineShieldCheck />,
    path: "sites",
  },
  {
    title: "Redirects",
    icon: <BiDirections />,
    path: "sites",
  },
  {
    title: "Logs",
    icon: <HiOutlineClipboardList />,
    path: "sites",
  },
  {
    title: "Meta",
    icon: <HiOutlineTag />,
    path: "sites",
  },
];

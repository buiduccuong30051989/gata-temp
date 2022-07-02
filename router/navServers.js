import {
  HiOutlineGlobeAlt,
  HiOutlineDatabase,
  HiOutlineKey,
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
} from "react-icons/hi";
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

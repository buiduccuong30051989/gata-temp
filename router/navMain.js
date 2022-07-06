import {
  HiOutlineServer,
  HiOutlineTemplate,
  HiOutlineCloudUpload,
  HiOutlinePuzzle,
  HiOutlineCog,
} from "react-icons/hi";

export const navMain = [
  {
    title: "Sites",
    icon: <HiOutlineServer className="pr-2 h-5 w-auto text-gray-500" />,
    path: "/dashboard",
  },
  {
    title: "Templates",
    icon: <HiOutlineTemplate className="pr-2 h-5 w-auto text-gray-500" />,
    path: "/templates",
  },
  {
    title: "Configurations",
    icon: <HiOutlineCog className="pr-2 h-5 w-auto text-gray-500" />,
    path: "/configurations",
  },
  {
    title: "Deployments",
    icon: <HiOutlineCloudUpload className="pr-2 h-5 w-auto text-gray-500" />,
    path: "/deployments",
  },
  {
    title: "Integrations",
    icon: <HiOutlinePuzzle className="pr-2 h-5 w-auto text-gray-500" />,
    path: "/intergrations",
  },
];

export const title = "diabetes classification";

export const navlinks = [
  {
    path: "/about",
    pathName: "about",
    icon: "fi fi-ss-terms-info",
    children: [],
  },
  {
    path: "/model",
    pathName: "model",
    icon: "fi fi-ss-robotic-arm",
    children: [],
  },
  {
    path: "/analisys",
    pathName: "analisys",
    icon: "fi fi-ss-big-data-analytics",
    children: [
      {
        path: "/cleaning",
        pathName: "cleaning",
        icon: "fi fi-ss-database-cleaning",
      },
      {
        path: "/training",
        pathName: "training",
        icon: "fi fi-ss-machine-learning",
      },
    ],
  },
];

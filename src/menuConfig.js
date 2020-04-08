// 菜单配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    text: "反馈",
    to: "//github.com/alibaba/ice/issues/new",
    external: true,
    newWindow: true,
    icon: "cart"
  },
  {
    text: "帮助",
    to: "//alibaba.github.io/ice/",
    external: true,
    newWindow: true,
    icon: "all"
  }
];

const asideMenuConfig = [
  {
    name: "监控页",
    id: "jky",
    children: [
      { name: "监控一", id: "jky-1", path: "/dashboard" },
      { name: "监控二", id: "jky-2", path: "/dashboard" }
    ]
  },
  {
    name: "设备管理",
    id: "sbgl",
    children: [
      { name: "管理一", id: "sbgl-1", path: "/home" },
      { name: "管理二", id: "sbgl-2", path: "/home" }
    ]
  },
  {
    name: "设备编辑",
    id: "sbbj",
    children: [
      { name: "编辑一", id: "sbbj-1", path: "/edit" },
      { name: "编辑二", id: "sbbj-2", path: "/edit" }
    ]
  },
  {
    name: "设备查看",
    id: "sbck",
    children: [
      { name: "查看一", id: "sbck-1", path: "/view" },
      { name: "查看二", id: "sbck-2", path: "/view" }
    ]
  }
];

export { headerMenuConfig, asideMenuConfig };

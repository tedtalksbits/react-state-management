export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "State Management Solutions",
    children: [
      {
        label: "React Context",
        subLabel:
          "React Context is a way to create a wrapper component that wraps around any group of components we want and can pass props directly to those components, without the need to 'drill'",
        href: "/context",
      },
      {
        label: "Redux",
        subLabel:
          "Redux is a library that has been around for a long time and is widely used in the React environment.",
        href: "/redux",
      },
      {
        label: "Redux Toolkit",
        subLabel:
          "Redux toolkit is a library built on top of Redux, which aims to take away some of the complexity and boilerplate that Redux generates.",
        href: "/redux-toolkit",
      },
      {
        label: "Recoil",
        subLabel:
          "Recoil is an open source state management library specifically for React built by Facebook/Meta. ",
        href: "/recoil",
      },
      {
        label: "Jotai",
        subLabel:
          "Jotai is an open source state management library built for React that is inspired by Recoil. It differs from Recoil in looking for an even more minimalistic API",
        href: "/jotai",
      },
      {
        label: "Zustland",
        subLabel:
          "Zustand is another open source state management library built for React. It's inspired by Flux.",
        href: "zustland",
      },
    ],
  },
];

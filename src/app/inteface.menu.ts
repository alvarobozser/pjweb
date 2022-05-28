export interface MenuItem {
    icon: string;
    text: string;
    value: string;
    subMenu: Array<{
      text: string;
      value: string;
    }>
  }
export interface SidebarItems {
  label: string;
  icon: string;
  route: string;
  badge?: number;
  subItems?: SidebarItems[];
}

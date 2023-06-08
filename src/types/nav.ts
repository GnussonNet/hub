import * as icons from "lucide-react";


export interface NavItem {
  title: string
  href?: string
  icon?: keyof Omit<typeof icons, "createReactComponent">
  disabled?: boolean
  external?: boolean
}

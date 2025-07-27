export type SubmenuItem = {
  label: string
  href: string
}

export type HeaderType = {
  label: string
  href: string
  icon?: string 
  children?: HeaderType[] // tambahkan baris ini
  submenu?: SubmenuItem[]
}

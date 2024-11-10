export interface loginDTO {
    email : string,
    password : string
  }

  export interface MenuItem {
    label: string;
    icon: string;
    route? : string;
    subItems?: MenuItem[];
  }
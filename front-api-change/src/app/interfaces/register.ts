export interface UserRegister {
  full_name: string;
  username:  string;
  email:     string;
  password:  string;
  phone:     number;
  status:    string;
  rol_id:    string;
  ability:   Ability;
}

export interface Ability {
  read:   boolean;
  write:  boolean;
  edit:   boolean;
  delete: boolean;
}

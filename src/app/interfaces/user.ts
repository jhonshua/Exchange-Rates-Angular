

export interface Token {
  accessToken:    string;
  authentication: Authentication;
  user:           User;
}

export interface Authentication {
  strategy: string;
}

export interface User {
  _id:       string;
  username:  string;
  email:     string;
  full_name: string;
  rol_id:    string;
  ability:   Ability[];
}

export interface Ability {
  action:  string;
  subject: string;
}

// this is an enum (called 'discrimiated union' in typescript)
export type ClimbType="bouldering"|"sport"

// makes a object inteface
export interface BoulderingGrade{
  "id": number,
  "system": string,
  "string_value": string,
  "value": string,
  "climb_type": ClimbType,
  "created_at": string,
  "updated_at": string
}

export interface AuthResponse {
  id: string;
  email: string;
  bearerToken: string;
}

class RailsAPI {

  private baseURL: string = 'http://localhost:3000';

  private url(endpoint: string) {
    return `${this.baseURL}${endpoint}`;
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const resp = await fetch(this.url(`/login`), {
      method: 'POST',
      body: JSON.stringify({ user: { email, password }})
    })

    const bearerToken = resp.headers.get('Authorization');
    return { ...resp.json(), bearerToken };
  }

  async bouldering(): Promise<Partial<BoulderingGrade>[]> {
    const resp = await fetch(this.url(`/login`));
    return resp.json() as Promise<BoulderingGrade[]>
  }
}

// make this a singelton
const railsAPI = new RailsAPI()
export default railsAPI
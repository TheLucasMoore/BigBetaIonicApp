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

class RailsAPI {
  async bouldering(): Promise<BoulderingGrade[]> {
    const resp = await fetch("http://localhost:3000/bouldering")
    return resp.json() as Promise<BoulderingGrade[]>
  }
}

// make this a singelton
const railsAPI = new RailsAPI()
export default railsAPI
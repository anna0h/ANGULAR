import { User } from "./user";
export { User } from "./user";


export class Padlet {

  constructor(
    public id: number,
    public is_public: boolean,
    public user_id: User,
    public name: string
  ) {  }
}

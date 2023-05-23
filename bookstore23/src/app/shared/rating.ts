import { User } from "./user";
export { User } from "./user";

export class Rating {
  constructor(
    public id: number,
    public user_id: number,
    public user: User,
    public entrie_id: number,
    public rating: number
  ) {}
}

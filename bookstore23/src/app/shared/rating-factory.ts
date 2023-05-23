import {Rating, User} from "./rating";

export class RatingFactory {

  static empty(): Rating{
    return new Rating(0,1, new User(4, "testFN", "tLN", "vname@test.at", "secret", "url"), 1, 1);
  }

  static fromObject(rawRating: any): Rating{
    return new Rating(
      rawRating.id,
      rawRating.user_id,
      rawRating.user,
      rawRating.entrie_id,
      rawRating.rating
    );
  }
}

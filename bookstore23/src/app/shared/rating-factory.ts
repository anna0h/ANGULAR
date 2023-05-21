import {Entrie, Rating, User} from "./rating";

export class RatingFactory {

  static empty(): Rating{
    return new Rating(0,new User(4, "testFN", "tLN", "vname@test.at", "secret", "url"),
      new Entrie(3, 1, 1, "default Entrie", "default Content", [], []),1);
  }

  static fromObject(rawRating: any): Rating{
    return new Rating(
      rawRating.user_id,
      rawRating.user,
      rawRating.entrie,
      rawRating.rating
    );
  }
}

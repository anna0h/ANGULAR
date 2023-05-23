import {Comment, Entrie, User} from "./comment";
import {Rating} from "./rating";

export class CommentFactory {
  static empty():Comment{
    return new Comment(1, 1, new User(1, "firstName", "lastName", "firstName@test.at", "secret", "url"),
      1, new Entrie(1, 1, 1, "default Entry-Titel", "default Entry-Content", [], []),
      "Das ist ein default-Comment");
  }

  static fromObject(rawComment: any): Comment{
    return new Comment(
      rawComment.id,
      rawComment.user_id,
      rawComment.user,
      rawComment.entrie_id,
      rawComment.entrie,
      rawComment.comment
    );
  }
}

import {Entrie} from "./entrie";
import {Rating} from "./rating";
import {Comment} from "./comment";

export class EntrieFactory {

  static empty(): Entrie {
    return new Entrie(1, 1, 1, "default-Entrie", "default-Content", [], []);
  }


  static fromObject(rawEntrie: any): Entrie {
    return new Entrie(
      rawEntrie.id,
      rawEntrie.user_id,
      rawEntrie.padlet_it,
      rawEntrie.title,
      rawEntrie.content,
      rawEntrie.ratings,
      rawEntrie.comments
    );

  }
}


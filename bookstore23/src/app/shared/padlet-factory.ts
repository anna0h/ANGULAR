import {Padlet, User} from "./padlet";

export class PadletFactory {

  static empty(): Padlet {
    return new Padlet(1, true, 1,"default",
      new User(1, "user", "User", "user@user.at", "secret", "url"),
      []);
  }


  static fromObject(rawPadlet: any): Padlet {
    return new Padlet(
      rawPadlet.id,
      rawPadlet.is_public,
      rawPadlet.user_id,
      rawPadlet.name,
      rawPadlet.user,
      rawPadlet.entries
    );

  }
}

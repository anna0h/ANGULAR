export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {  }
}

export const EntrieFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Ein Entry-Titel muss angegeben werden!'),
  new ErrorMessage('content', 'required', 'Ein Entry-Content muss angegeben werden!'),
  // RATING
  new ErrorMessage('rating', 'required', 'Ein Rating (1 - 5) muss angegeben werden!'),
  // COMMENT
  new ErrorMessage('comment', 'required', 'Ein Kommentar muss angegeben werden!')
]

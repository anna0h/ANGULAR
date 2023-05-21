export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {  }
}

export const EntrieFormErrorMessages = [
  new ErrorMessage('title', 'required', 'Ein Entry-Titel muss angegeben werden!'),
  new ErrorMessage('content', 'required', 'Ein Entry-Content muss angegeben werden!')
]

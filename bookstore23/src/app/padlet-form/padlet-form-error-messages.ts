export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {
  }
}

export const PadletFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Ein Padletname muss angegeben werden'),
]

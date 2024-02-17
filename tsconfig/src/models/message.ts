export class Message {
  body: string
  
  constructor(body: string) {
    this.body = body
  }
  
  print(printFunction: (...args: any) => void){
    printFunction(this.body)
  }
}

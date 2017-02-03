import{Injectable} from "@angular/core"


@Injectable()


export class Contact {
  constructor(public contactID, public name, public email, public phone, public imagePath, public group:Contact[]){

  }
}

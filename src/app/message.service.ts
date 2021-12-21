import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  message: string[] = [];
  constructor() {}

  add(newMessage: string) {
    this.message.push(newMessage);
  }

  clear() {
    this.message = [];
  }
}

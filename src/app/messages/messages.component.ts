import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  /* MOŻNA TEŻ TAK POBRAĆ WIADOMOŚCI I WTEDY BEZ BINDOWANIA W HTML */
  // messages = this.messageService.messages;

  ngOnInit() {
  }

}

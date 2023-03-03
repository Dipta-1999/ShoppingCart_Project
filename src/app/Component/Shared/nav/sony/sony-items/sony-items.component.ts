import { Component, Input, OnInit } from '@angular/core';
import { Sony } from 'src/app/models/sony';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-sony-items',
  templateUrl: './sony-items.component.html',
  styleUrls: ['./sony-items.component.css']
})
export class SonyItemsComponent implements OnInit {

  @Input() productItem!: Sony;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

}

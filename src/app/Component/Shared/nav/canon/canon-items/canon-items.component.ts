import { Component, Input, OnInit } from '@angular/core';
import { Canon } from 'src/app/models/canon';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-canon-items',
  templateUrl: './canon-items.component.html',
  styleUrls: ['./canon-items.component.css']
})
export class CanonItemsComponent implements OnInit {

  @Input() productItem!: Canon;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

}

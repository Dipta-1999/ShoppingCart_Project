import { Component, Input, OnInit } from '@angular/core';
import { Nikon } from 'src/app/models/nikon';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-nikon-items',
  templateUrl: './nikon-items.component.html',
  styleUrls: ['./nikon-items.component.css']
})
export class NikonItemsComponent implements OnInit {

  @Input() productItem!: Nikon;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

}

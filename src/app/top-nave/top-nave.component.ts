import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nave',
  templateUrl: './top-nave.component.html',
  styleUrls: ['./top-nave.component.scss']
})

export class TopNaveComponent implements OnInit {
  @Input() header: string;  
  
  constructor() {
    this.header = ''; // or any other default value
  }

  ngOnInit(): void {}

}

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy01',
  templateUrl: './destroy01.component.html',
  styleUrls: ['./destroy01.component.css']
})
export class Destroy01Component implements OnInit ,OnDestroy{
  ngOnDestroy(): void {
    console.log("组件01被销毁");
  }

  constructor() { }

  ngOnInit() {
  }

}

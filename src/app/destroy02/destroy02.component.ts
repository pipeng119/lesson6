import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy02',
  templateUrl: './destroy02.component.html',
  styleUrls: ['./destroy02.component.css']
})
export class Destroy02Component implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("组件02被销毁");
  }

  constructor() { }

  ngOnInit() {
  }

}

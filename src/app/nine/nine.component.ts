import { Component, OnInit,AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-nine',
  templateUrl: './nine.component.html',
  styleUrls: ['./nine.component.css']
})
export class NineComponent implements OnInit,AfterContentInit,AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log("子组件投影内容初始化完毕1");
  }

  ngAfterContentChecked(){
    console.log("子组件投影内容变更检测完毕1");
  }
}

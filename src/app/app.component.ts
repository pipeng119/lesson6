import { Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked ,AfterContentChecked, AfterContentInit{
  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完毕')
  }
  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完毕')
  }

  title = '小微呀';
  greeting: string = 'Hello';
  user: { name: string } = { name: "Tom" };
  message: string;
  divContent = 'bengcaca';

  @ViewChild("children1")
  children1: ChildrenComponent;

  ngOnInit(): void {
    // setInterval(() => {
    //   this.children1.greeting("Tom")
    // }, 5000)
  }
  ngAfterViewInit(): void {
    console.log("父组件的视图初始化完毕");
    // setTimeout(() => {
    //   this.message = '蹦擦擦!'
    // })
  }
  ngAfterViewChecked(): void {
    console.log("父组件的视图变更检测完毕");
  }
}

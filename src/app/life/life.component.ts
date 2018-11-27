import { Component, OnInit, DoCheck, AfterContentChecked, OnChanges, AfterContentInit, AfterViewChecked, AfterViewInit, Input, SimpleChanges } from '@angular/core';

let logIndex:number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  logIt(msg: string){
    console.log(`#${logIndex++}${msg}`)
  }
  @Input()
  name: string;

  ngOnChanges(changes:SimpleChanges): void {
    let name = changes["name"].currentValue;
    this.logIt("name属性在constructor里的值是:" + name);
  }
  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }
  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }

  constructor() {
    this.logIt("name属性在constructor里的值是:" + name);
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

}

export class GitTest1234{
  id: number;
}

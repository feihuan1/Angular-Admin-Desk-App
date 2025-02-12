import { Component, ElementRef, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // disable style scpoe
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  @HostBinding('class') className = 'control'
  lable = input.required<string>()

  private el = inject(ElementRef) // this can access to native element

  // @HostListener('click') onClick(){
  //   console.log('click')
  // }

  onClick(){
    console.log('click')
    console.log(this.el)
  }
}

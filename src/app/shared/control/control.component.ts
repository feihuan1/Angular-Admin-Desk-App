import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  @HostBinding('class') className = 'control'
  lable = input.required<string>()
  private el = inject(ElementRef) // this can access to native element
  // @ContentChild("input") private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  // @HostListener('click') onClick(){
    //   console.log('click')
    // }
  
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input")
  
  constructor(){
    afterRender(() => {
      // console.log('after render')
    })

    afterNextRender(()=> {
      // console.log('after next render')
    })
  }

    ngAfterContentInit(): void {
      // console.log(this.control())
    }

  onClick(){
    // console.log('click')
    // console.log(this.el)
    // console.log(this.control())
  }
}

import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // disable style scpoe
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  lable = input.required<string>()
}

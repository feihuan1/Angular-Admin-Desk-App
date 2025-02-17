import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  
  // @ViewChild("form") form?: ElementRef<HTMLFormElement>
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form")
  
  ngOnInit(): void {
    // console.log("init")
    // console.log(this.form().nativeElement)
  }
  ngAfterViewInit(): void {
    // console.log("after view init")
    // console.log(this.form().nativeElement)
  }

  onSubmit(title: string, ticketText: string, ) {
    // console.log(title)
    // console.log(ticketText)
    // this.form().nativeElement.reset()
  }
}

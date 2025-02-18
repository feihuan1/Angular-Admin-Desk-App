import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // alias change the property name outside of conponent
  data = input.required<Ticket>({alias: 'data'})
  close = output()

  detailVisible = signal(false)

  onToggleDetails() {
    // this.detailVisible.set(!this.detailVisible())
    this.detailVisible.update((wasVisible) => ! wasVisible)
  }

  onMarkAsCompleted() {
    this.close.emit()
  }
}

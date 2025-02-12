import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

// implements is not required but recommended, prevent pain in the ass typo
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  // constructor runs whenever this class is instantiated
  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random()

  //     if(rnd < 0.5) {
  //       this.currentStatus = 'online'
  //     } else if(rnd < 0.9) {
  //       this.currentStatus = 'offline'
  //     } else {
  //       this.currentStatus = 'unknown'
  //     }
  //   }, 5000)
  // }

// both init and constructor works but it is better practise to  use this !!!
  // onInit run after initialized all input witch constructor might cause error!!!
  // life cycle hooks
  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random()

      if(rnd < 0.5) {
        this.currentStatus = 'online'
      } else if(rnd < 0.9) {
        this.currentStatus = 'offline'
      } else {
        this.currentStatus = 'unknown'
      }
    }, 5000)
  }

}

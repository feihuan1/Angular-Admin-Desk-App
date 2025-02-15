import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

// implements is not required but recommended, prevent pain in the ass typo
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef)
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
  // constructor -> ngOnchanges -> ngOnInit -> ngDoCheck -> 2 branch -> afterRender
  
  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(()=> {
      clearInterval(interval)
    })
  }

  // // destroy interval when component not active
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval)
  // }
}

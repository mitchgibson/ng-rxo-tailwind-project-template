import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col h-screen p-16 bg-neutral-100 items-center">
      <h1 class="text-4xl text-amber-600 pb-8">Welcome to {{ title }}!</h1>
      <p class="text-lg text-slate-600">A template for starting Angular applications with RxoState and Tailwind CSS.</p>
      <p class="cursor-pointer text-md text-amber-600 p-2 m-4 rounded-md border border-amber-600 hover:bg-amber-600 hover:text-neutral-100">Some more text for the full triadic pallet</p>
    </div>
  `
})
export class AppComponent {
  title = 'ng-rxo-tailwind-project-template';
}

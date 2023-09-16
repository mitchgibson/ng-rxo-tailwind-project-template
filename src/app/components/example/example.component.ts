import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <p class="text-lg text-slate-600">A template for starting Angular applications with RxoState and Tailwind CSS.</p>
    <p class="cursor-pointer text-md text-amber-600 p-2 m-4 rounded-md border border-amber-600 hover:bg-amber-600 hover:text-neutral-100">Some more text for the full triadic pallet</p>
  `,
  standalone: true,
  imports: []
})
export class ExampleComponent {
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col h-screen p-16 bg-neutral-100 items-center">
      <h1 class="text-4xl text-amber-600 pb-8">Welcome to {{ title }}!</h1>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'ng-rxo-tailwind-project-template';
}

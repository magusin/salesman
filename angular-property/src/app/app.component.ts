import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header></app-header>

        <main class='container-fluid px-0'>
            <div class='container'>
                <app-cards></app-cards>
            </div>
        </main>

        <app-footer></app-footer>
    `
})
export class AppComponent {
  title = 'angular-property';
}

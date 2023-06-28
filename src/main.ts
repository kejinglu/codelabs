import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; //add provideRouter
import routeConfig from './app/routes';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)//def routes
  ]
})
  .catch(err => console.error(err));

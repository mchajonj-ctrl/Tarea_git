import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/misistema/app.config';
import { App } from './app/misistema/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
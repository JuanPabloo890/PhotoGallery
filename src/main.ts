import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {defineCustomElements} from '@ionic/pwa-elements/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { SplashScreen } from '@capacitor/splash-screen';

if (environment.production) {
  enableProdMode();
}
defineCustomElements(window);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

SplashScreen.show({ showDuration: 2000, autoHide: true }).catch(err => console.error(err));

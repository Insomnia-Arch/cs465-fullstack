import { ApplicationConfig, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { JwtInterceptor } from './utils/jwt-interceptor';

export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};

export const appConfig: ApplicationConfig = {
  providers: [
   provideRouter(routes),
   provideHttpClient(),
   importProvidersFrom(HttpClientModule),
   authInterceptProvider
  ]
};
// using importProvidersFrom from @angular/core


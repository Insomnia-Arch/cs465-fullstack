import { Injectable, Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from '../services/authentication';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
private authentication: Authentication
) {}
intercept(request: HttpRequest<any>, next: HttpHandler):
Observable<HttpEvent<any>> {
var isAuthAPI: boolean;
// console.log('Interceptor::URL' + request.url);
if(request.url.startsWith('login') ||
request.url.startsWith('register')) {
isAuthAPI = true;
}
else {
isAuthAPI = false;
}
if(this.authentication.isLoggedIn() && !isAuthAPI) {
let token = this.authentication.getToken();
// console.log(token);
const authReq = request.clone({
setHeaders: {
Authorization: `Bearer ${token}`
}
});
return next.handle(authReq);
}
return next.handle(request);
}
}

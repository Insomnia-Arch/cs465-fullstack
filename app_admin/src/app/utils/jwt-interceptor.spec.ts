import { TestBed } from '@angular/core/testing';
import { HttpHandler, HttpRequest } from '@angular/common/http';

import { JwtInterceptor } from './jwt-interceptor';

describe('jwtInterceptor', () => {
  const interceptor = (req: HttpRequest<unknown>, next: HttpHandler) =>
    TestBed.runInInjectionContext(() => TestBed.inject(JwtInterceptor).intercept(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterceptor],
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});

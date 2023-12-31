import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error('Enter authorization header');
    }
    if (authorization == '123') {
      next();
    } else {
      throw new Error('Not authorized');
    }
  }
}

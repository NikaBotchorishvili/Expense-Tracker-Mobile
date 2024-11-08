import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { FormattedResponse } from '../../types/interceptors/request/types';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp().getResponse();

    return next.handle().pipe(map((result) => this.transformData(result)));
  }

  transformData(result: any): FormattedResponse {
    let data = result;
    let count: number | null = null;

    if (Array.isArray(result)) {
      data = result;
      if (result.length === 2 && typeof result[1] === 'number') {
        count = result[1];
        data = result[0];
      }
    }
    return {
      statusCode: 200,
      data: data,
      count: count,
    };
  }
}

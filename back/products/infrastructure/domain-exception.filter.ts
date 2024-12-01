import {
  Catch,
  ExceptionFilter,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { MaterialNotFound, ProductItemNotFound, ProductNotFound } from '@/products/domain/errors';

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: any) {
    if (
      exception instanceof ProductNotFound ||
      exception instanceof ProductItemNotFound ||
      exception instanceof MaterialNotFound
    ) {
      throw new NotFoundException({ id: exception.id, message: exception.message });
    }

    throw new InternalServerErrorException();
  }
}

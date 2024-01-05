import { Exception } from './Base/Exception';

export class LogicError extends Exception {
  constructor(
    message?: string,
    options?: ErrorOptions & {
      cause?: unknown & { code?: string };
      previous?: Throwable;
    },
  ) {
    super(message, options);
    this.name = 'LogicError';
    if (!options?.cause?.code) this.code = 'E_LOGIC_ERROR';
    if (!message) this.message = 'An error in the program logic has occurred.';
  }
}

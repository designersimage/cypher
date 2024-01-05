import { LogicError } from "./LogicError";

export class InvalidArgumentError extends LogicError {
  constructor(
    message?: string,
    options?: ErrorOptions & {
      cause?: unknown & { code?: string };
      previous?: Throwable;
    },
  ) {
    super(message, options);
    this.name = 'InvalidArgumentError';
    if (!options?.cause?.code) this.code = 'E_INVALID_ARGUMENT_ERROR';
    if (!message) this.message = 'An argument is not of the expected type.';
  }
}
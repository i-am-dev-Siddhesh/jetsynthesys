export class CustomError extends Error {
  status_code: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.status_code = statusCode;
    this.name = 'CustomError';
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

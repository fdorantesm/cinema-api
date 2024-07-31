import { InvalidValueException } from '@/core/domain/exceptions/invalid-value.exception';

export abstract class ValueObject<T> {
  private _value: T;

  constructor(value: T) {
    if (this.isValid && !this.isValid(value)) {
      throw new InvalidValueException(`Invalid value: ${value}`);
    }
    this._value = value;
  }

  public getValue(): T {
    return this._value;
  }

  public isEqual(valueObject: ValueObject<T>): boolean {
    return this._value === valueObject.getValue();
  }

  public isValid(value: T): boolean {
    return Boolean(value);
  }

  public toString(): string {
    return String(this._value);
  }

  public isDefined(): boolean {
    return Boolean(this._value);
  }
}

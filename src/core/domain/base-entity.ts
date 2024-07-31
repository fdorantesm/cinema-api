import { Entity } from '@/core/domain/entity';
import { BaseProps } from '@/core/domain/interfaces/base-props.interface';

export abstract class BaseEntity<T extends BaseProps> extends Entity<T> {
  protected _uuid: string;

  protected constructor(data: T) {
    super(data);
    this._uuid = data.uuid;
  }

  public getUuid(): string {
    return this?._uuid;
  }

  public toJson() {
    return {
      uuid: this._props.uuid,
      ...super.toJson(),
    };
  }
}

export type PayloadBaseProps = Pick<BaseProps, 'uuid'>;

export abstract class Entity<T> {
  protected _props: T;
  protected hiddenFields: string[] = [];
  protected protectedFields: string[] = ['_id', '__v'];

  protected constructor(data: T) {
    this._props = this.filterProtectedFields(data);
  }

  public getUuid(): string {
    return this._props['uuid'];
  }

  public toJson() {
    return {
      ...this._props,
      ...this.hideFields(this.hiddenFields),
    };
  }

  private hideFields(fields: string[]) {
    return fields.reduce((acc, field) => {
      delete acc[field];
      return acc;
    }, {});
  }

  private filterProtectedFields(data: T): T {
    return Object.keys(data).reduce((acc, key) => {
      if (!this.protectedFields.includes(key)) {
        acc[key] = data[key];
      }
      return acc;
    }, {}) as T;
  }
}

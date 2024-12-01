export class ProductNotFound extends Error {
  constructor(readonly id: string) {
    super(`product "${id}" does not exist`);
  }
}

export class ProductItemNotFound extends Error {
  constructor(readonly id: string) {
    super(`product item "${id}" does not exist`);
  }
}

export class MaterialNotFound extends Error {
  constructor(readonly id: string) {
    super(`material "${id}" does not exist`);
  }
}

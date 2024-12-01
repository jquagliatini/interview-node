export function assertNever(value: unknown): never {
  throw new Error(`${value} is not supported`);
}

export interface ResultHandler<T = never> {
  onSuccess?: (
    ...data: T extends never ? [never] : [T]
  ) => void | Promise<void>;
  onError?: (error: Error | string) => void | Promise<void>;
}

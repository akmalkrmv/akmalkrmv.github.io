export function Throttle(delay: number = 300): MethodDecorator {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    let waiting = false;

    descriptor.value = function (...args) {
      if (!waiting) {
        waiting = true;
        original.apply(this, args);
        setTimeout(() => (waiting = false), delay);
      }
    };

    return descriptor;
  };
}

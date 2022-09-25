# Counter Processing Time

Package with 0 dependencies to measure the execution time of a function.

```typescript
import { ProcessingTimeCalculator } from "@joezerg/counter-processing-time";

function SomeFunction() {
  const timeCounter = new ProcessingTimeCalculator();

  setTimeOut(() => {
    const elapsedTime = timeCounter.stop(); // => return time in milliseconds
    console.log(elapsedTime);
  }, 2000);
}
```

## Configuration

```typescript
import {
  ProcessingTimeCalculator,
  TimeUnit,
} from "@joezerg/counter-processing-time";

function SomeFunction() {
  const timeCounter = new ProcessingTimeCalculator({
    message: "Some tag to identified the counter",
    timeUnit: TimeUnit.SECONDS,
  });

  setTimeOut(() => {
    timeCounter.stop(); // Log Output => Some tag to identified the counter | 2 seconds
  }, 2000);
}
```

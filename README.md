# Counter Processing Time

Package zero dependencies to measure the execution time of a function.

## Install

```bash
yarn add @joezerg/counter-processing-time
```

or

```bash
npm i @joezerg/counter-processing-time
```

## Usage

```typescript
import { ProcessingTimeCalculator } from "@joezerg/counter-processing-time";

function SomeFunction() {
  const timeCounter = new ProcessingTimeCalculator();

  setTimeout(() => {
    const elapsedTime = timeCounter.stop(); // => always return time in milliseconds or seconds
    console.log(elapsedTime); // => 2000
  }, 2000);
}
```

## Options

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

  setTimeout(() => {
    timeCounter.stop(); // Log Output => "Some tag to identified the counter | 2 seconds"
  }, 2000);
}
```

| Parameter | Type                     | Description                                                          |
| --------- | ------------------------ | -------------------------------------------------------------------- |
| message   | string (optional)        | message to attach to the log promt                                   |
| timeUnit  | TimeUnit enum (optional) | Set the Time meassure unit to return or log, Defautl is milliseconds |

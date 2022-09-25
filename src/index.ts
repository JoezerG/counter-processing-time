import { hrtime } from "process";

export enum TimeUnit {
  SECONDS,
  MILLISECONDS,
}

interface ProcessingTimeCalculatorOptions {
  message?: string;
  timeUnit?: TimeUnit;
}
export class ProcessingTimeCalculator {
  // private readonly logger = new Logger(ProcessingTimeCalculator.name);
  private startCounter: [number, number];
  private message: string = "";
  private timeUnit: TimeUnit = TimeUnit.MILLISECONDS;

  constructor(props?: ProcessingTimeCalculatorOptions) {
    this.startCounter = hrtime();
    if (props) {
      if (props.message) {
        this.message = props.message;
      }

      if (props.timeUnit) {
        this.timeUnit = props.timeUnit;
      }
    }
  }

  stop() {
    const _stop = hrtime(this.startCounter);
    const elapsedTimeMili = Math.floor((_stop[0] * 1e6 + _stop[1]) / 1e6); // miliseconds
    const elapsedTimeSeconds = (_stop[0] * 1e9 + _stop[1]) / 1e9; // seconds
    if (this.message !== "") {
      switch (this.timeUnit) {
        case TimeUnit.MILLISECONDS:
          console.log(`${this.message} | ${elapsedTimeMili} milliseconds`);
          break;

        case TimeUnit.SECONDS:
          console.log(`${this.message} | ${elapsedTimeSeconds} seconds`);
          break;
      }
    }

    switch (this.timeUnit) {
      case TimeUnit.MILLISECONDS:
        return elapsedTimeMili;

      case TimeUnit.SECONDS:
        return elapsedTimeSeconds;
    }
  }
}

class Timer {
  constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display) {
    this.initializeTimer(
      minMSB,
      minLSB,
      secMSB,
      secLSB,
      start,
      stop,
      reset,
      display
    );
    this.bindEvents();
    this.minutes = 0;
    this.seconds = 0;
    this.IntervalId = null;
  }

  initializeTimer(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display) {
    this.minMSB = document.getElementById(minMSB);
    this.minLSB = document.getElementById(minLSB);
    this.secMSB = document.getElementById(secMSB);
    this.secLSB = document.getElementById(secLSB);

    this.start = document.getElementById(start);
    this.stop = document.getElementById(stop);
    this.reset = document.getElementById(reset);

    this.display = document.getElementById(display);

    console.log("msb", this.minMSB);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onInput = this.onInput.bind(this);

    this.start.addEventListener("click", this.onStart);
    this.stop.addEventListener("click", this.onStop);
    this.reset.addEventListener("click", this.onReset);
    this.display.addEventListener("input", this.onInput);
  }

  onStart() {
    this.setControls(true, false);
    this.display.classList.add("progress");
    this.setTime();
    this.startTimer();
  }
  onStop() {
    this.setControls(false, true);
    this.display.classList.remove("progress");
    clearInterval(this.IntervalId);
  }
  onReset() {
    this.onStop();
    this.resetTimer();
  }

  onInput(event) {
    const value = Number(event.data);

    if (Number.isInteger(value)) {
      if (this.minMSB === document.activeElement) {
        this.onValueEntry(this.minMSB, this.minLSB, value, 0, 5);
      } else if (this.minLSB === document.activeElement) {
        this.onValueEntry(this.minLSB, this.secMSB, value, 0, 9);
      } else if (this.secMSB === document.activeElement) {
        this.onValueEntry(this.secMSB, this.secLSB, value, 0, 5);
      } else if (this.secLSB === document.activeElement) {
        this.onValueEntry(this.secLSB, null, value, 0, 9);
      }
    }
  }
  onValueEntry(target, nextTarget, value, minAllowed, maxAllowed) {
    if (value >= minAllowed && value <= maxAllowed) {
      target.value = value;
      if (nextTarget) {
        nextTarget.focus();
        nextTarget.select();
      }
    } else {
      target.value = 0;
      target.select();
    }
  }
  setTime() {
    console.log("timer startred", this.minMSB);
    this.minutes =
      parseInt(this.minMSB.value) * 10 + parseInt(this.minLSB.value);
    this.seconds =
      parseInt(this.secMSB.value) * 10 + parseInt(this.secLSB.value);
  }
  startTimer() {
    console.log("timer check");
    if (this.minutes === 0 && this.seconds == 0) {
      this.onReset();
      return;
    }

    this.IntervalId = setInterval(() => {
      this.seconds -= 1;

      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes -= 1;
      }

      if (this.minutes === 0 && this.seconds === 0) {
        this.onReset();
      }

      this.setDisplay(this.minutes, this.seconds);
    }, 1000);
  }

  setDisplay(minutes, seconds) {
    this.minMSB.value = String(Math.floor(minutes / 10));
    this.minLSB.value = String(minutes % 10);
    this.secMSB.value = String(Math.floor(seconds / 10));
    this.secLSB.value = String(seconds % 10);
  }

  resetTimer() {
    this.minLSB.value = 0;
    this.minMSB.value = 0;
    this.secLSB.value = 0;
    this.secMSB.value = 0;
  }

  setControls(startStatus = false, stopStatus = false) {
    this.start.disabled = startStatus;
    this.stop.disabled = stopStatus;
  }
}

new Timer(
  "minMSB",
  "minLSB",
  "secMSB",
  "secLSB",
  "start",
  "stop",
  "reset",
  "display"
);

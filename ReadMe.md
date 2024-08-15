# Clock App

Welcome to the Clock App! This project is a simple yet functional clock application with a timer and stopwatch feature. It's built with HTML, CSS, and JavaScript.

## Features

- **Clock:** A real-time clock with hour, minute, and second hands.
- **Stopwatch:** A fully functional stopwatch with start, stop, and reset features.
- **Timer:** A countdown timer with start, stop, and reset features.
- **Sound:** Toggle sound effects for ticking and timer notifications.
- **Responsive Design:** Adjusts to various screen sizes.

## Getting Started

To get started with the Clock App, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sayhan1610/clock.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd clock
   ```

3. **Open `index.html` in Your Browser:**

   You can simply open the `index.html` file in your web browser to see the Clock App in action.

## How It Works

### Clock

- The clock updates every second to show the current time.
- The clock face has numbers and hands for hours, minutes, and seconds.

### Stopwatch

- Click the "Stopwatch" button to switch to the stopwatch view.
- You can start, stop, and reset the stopwatch using the provided buttons.

### Timer

- Click the "Timer" button to switch to the timer view.
- Enter hours, minutes, and seconds, and then start the timer.
- You can also stop and reset the timer.

### Menu

- Click on the clock to toggle the menu with options to switch between clock, stopwatch, and timer views.
- The menu is positioned below the clock and aligns with its left edge.

### Sound

- Click the mute button to toggle sound on and off.
- The app includes tick sounds and timer notifications.

## Files

- `index.html` - The main HTML file.
- `styles.css` - The CSS file containing styles for the app.
- `script.js` - The JavaScript file containing the logic for the clock, stopwatch, and timer.
- `/sounds/tick.mp3` - Sound file for the clock ticking.
- `/sounds/timer.mp3` - Sound file for timer notifications.

## Code Highlights

- **Clock Functionality:** Updates every second using `setInterval` and `Date` object.
- **Stopwatch Functionality:** Tracks elapsed time with a 10ms interval.
- **Timer Functionality:** Counts down from a specified time and plays a sound when the timer reaches zero.
- **Sound Control:** Mute and unmute the ticking sound with a button.

## Contributions

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions and feedback are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

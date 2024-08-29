# Flow Fields Visualization

This project is a creative coding endeavor that visualizes flow fields using the Perlin noise
algorithm and vector mathematics on a 2D plane. It simulates particles moving in a fluid-like
structure, creating mesmerizing patterns that evolve over time.

![Example Generation](/WhatsApp%20Image%202024-04-16%20at%2011.04.24.jpeg "Flow Field")

## Features

- **Dynamic Particle System**: Utilizes a particle system where each particle's movement is
  influenced by Perlin noise and gravitational points, creating a natural and fluid motion.
- **Gravitational Points**: Implements gravitational points that exert forces on particles, adding
  complexity and depth to the flow field patterns.
- **Responsive Canvas**: The canvas dynamically adjusts to the screen size, ensuring the
  visualization is fully visible across different devices.
- **Interactive Elements**: Includes interactive elements such as mouse click and release events to
  alter the flow field's behavior and appearance in real-time.

## Customization

To customize the behavior, size, and color of the canvas and its elements, follow these steps:

### Changing Canvas Size

1. Open `script.js`.
2. Locate the `setup` function.
3. Modify the `createCanvas(width, height)` function call with your desired dimensions.

### Altering Particle Behavior

1. In `script.js`, find the `update` method within the particle class.
2. Adjust the force application logic or the Perlin noise parameters to change how particles move.

### Modifying Particle and Background Colors

1. To change the background color, locate the `background(r, g, b)` function call in the `draw`
   function in `script.js` and adjust the RGB values.
2. To change the particle color, find where particles are drawn (look for `stroke(r, g, b)` or
   `fill(r, g, b)`) and modify the RGB values accordingly.

### Experimenting with Gravitational Points

1. Gravitational points are defined in the `setup` function. To add more points or change their
   positions, modify the array that stores these points.
2. To alter the gravitational force, adjust the force calculation in the method that applies
   gravitational forces to particles.

## Further Reading

For more information on flow fields and the Perlin noise algorithm, which are fundamental to this
project, please refer to the following resource:

- [Getting Creative with Perlin Noise Fields](https://sighack.com/post/getting-creative-with-perlin-noise-fields)

This article provides a deep dive into the concepts and applications of Perlin noise in creating
complex, natural-looking patterns and simulations.


## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a modern web browser.

The project uses the p5.js library for canvas manipulation and drawing, which is loaded directly
from a CDN in the `index.html` file.

## Usage

Once the project is running in your browser, you can interact with it in the following ways:

- **Click and Release Mouse**: Alters the seed used for the Perlin noise algorithm, resulting in a
  change in the flow field patterns.
- **Resize Browser Window**: The canvas will adjust to the new window size, maintaining the
  visualization's integrity.

## Project Structure

The project consists of the following files:

- `index.html`: The HTML file that loads the p5.js library and links to the project's JavaScript and
  CSS files.
- `script.js`: Contains the core logic for the flow field visualization, including particle and
  gravitational point classes, setup and draw functions, and event handlers.
- `style.css`: Defines basic styling for the canvas and the HTML body to ensure the visualization
  takes up the entire screen.

## Technologies

- **p5.js**: A client-side JavaScript library that offers a wide range of drawing and animation
  functionalities, making it ideal for creative coding projects like this one.

## Contributing

Contributions to enhance the flow fields visualization project are welcome. Whether it's adding new
features, improving the existing code, or fixing bugs, your input is valuable. Please feel free to
fork the repository and submit pull requests.


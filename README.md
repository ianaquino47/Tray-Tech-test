## Installation

Fork this repository. To install all dependencies, run the code below:

```
$ npm install
```

## Launching the app

To run the app, run the code below:

```
$ node src/App.js
```

## Using the app

The app is programmed to print two lines on STDOUT of the terminal :
    * The first line displays the X and Y coordinates marking the position of the hoover after processing all commands.
    * The second line of the program displays the number of patches of dirt
the hoover cleaned up.

To change the instructions, just change the input.txt on the 'src' folder making sure that the following format is followed:
    * the first line holds the room dimensions (X Y), separated by a single space (all
coordinates has to be presented in this format)
    * the second line holds the hoover position
    * subsequent lines contain the zero or more positions of patches of dirt (one per line)
    * the next line then always contains the driving instructions (at least one)


## Testing

To run the tests: run the code below

```
$ mocha

```
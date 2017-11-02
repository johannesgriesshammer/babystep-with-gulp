# babystep-with-gulp
Take a baby step with gulp.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things you need to install the software and how to install them

You will need [Node.js](https://nodejs.org/en/download/) installed. 
Many different installers for your favorite OS are avaiable at Node's official website. 

Install the Gulp CLI globally
```
npm install gulp-cli -g
```

### Installing
Clone or download this repository to your local developement machine. Move to the root folder via console.

Install all required node modules.
```
npm install
```

Compile your scss
```
gulp sass
```

## Built with
* [Node.js](https://nodejs.org/en/download/) - The JavaScript runtime built used
* [Gulp.js](https://gulpjs.com/) - Automation toolkit

## Authors
* **Johannes Grießhammer** - *Initial work* - [Johannes Grießhammer](https://github.com/johannesgriesshammer)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* thanks to all the great Node developers
* let's share code and learn together
* this is just a Gulp project for the total beginner - it's supposed to be as simplified as it is

## What to possibly add to this little SASS/SCSS task
* autoprefixer, so you don't have to mind about prefixes anymore
* improved error handling with gulp plumber
* file compression
* rename output file to .min.css after compression
* implement browserify to reload on file changes

# babystep-with-gulp
Take a baby step with gulp.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things you need to install the software and how to install them

You will need [Node.js](https://nodejs.org/en/download/) installed. 
Many different installers for your favorite OS are avaiable at Node's official website. 

```
The Gulp command lines interface can be globally installed via npm install gulp-cli -g
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

/*
What you could add to the sass task:
- Autoprefixer
- (Better) error handling
- Compress file
- rename output file after compression to xyz.min.css
- implement browserify to reload on changes
*/

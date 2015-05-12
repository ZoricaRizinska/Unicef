# unicef

This is the front end code for Unicef App

## Build & development

The front end code uses Angular as the JavaScript framework. Bower is used to manage packages and Grunt is the task runner which will take care of things like minification, testing, and reloading the browser.

Install bower and grunt (this requires node, npm, and git to be installed): npm install -g bower and npm install -g grunt-cli

Now run npm install (which installs everything in package.json), bower install (which installs everything in bower.json), and grunt build (which runs a series of tasks to get ready for serving the app).

Finally you can run grunt serve which should open a browser to the app. (localhost:9000)

## Testing

Running `grunt test` will run the unit tests with karma.

## Instruction for running the documentation app locally

Run 'grunt docs' and docs apps will be running under port 9002.
We can now navigate thorough documentation against various elements in the front end.

# html-boilerplate

A starting point for any plain html project.

## Extensions:

Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
Press the "Go Live" on the bottom right corner in order to see live changes.

Live Sass Compiler: https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass
Press the "Watch Sass" on the bottom right corner in order to see live changes.

(What is a CSS map file? It is a JSON format file that links the CSS file to its source
files, normally, files written in preprocessors (i.e., Less, Sass, Stylus, etc.), this is
in order do a live debug to the source files from the web browser.)

SASS Alternative (the hard way)
npm i node-sass

`"scripts": {
    "watch:scss": "node-sass -w src/style.scss src/style.css"
},`

npm run watch:scss

TODO Highlight: https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight

Prettier - Code formatter: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

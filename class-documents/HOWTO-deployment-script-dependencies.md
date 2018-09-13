Deploy Script Dependencies
==========================

[https://github.com/mishoo/UglifyJS2](https://github.com/mishoo/UglifyJS2)  
For command line use, add -g flag: $ sudo npm install uglify-js -g  
Example:  
$ uglifyjs -c -m sort,toplevel -- myfile.js > ../release/myfile.js  

[https://github.com/jakubpawlowicz/clean-css](https://github.com/jakubpawlowicz/clean-css)  
$ sudo npm install clean-css -g  
Example:  
$ cleancss -o ../releasr/myfile.min.css myfile.css  

[https://github.com/kangax/html-minifier](https://github.com/kangax/html-minifier)  
$ sudo npm install html-minifier -g  
Example:  
$ html-minifier --remove-comments --collapse-whitespace --case-sensitive myfile.htm > ../release/myfile.htm  

GZIP: all major browsers support gzip  
gzip -9 -c index.htm > ../release/myfile.htm  

Note: Remember on S3, etc. you need to add Content-Encoding = gzip to META tags.  

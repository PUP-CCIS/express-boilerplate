/**
 * Load 'morgan' module for HTTP logging. Refer to the following link
 * for reference: https://github.com/expressjs/morgan
 */
var morgan = require('morgan');

/**
 * Load the 'path' module
 */
var path = require('path');

/**
 * Load the 'body-parser' module. This is basically used to parse data
 * from your forms (as well as any HTTP requests) when you submit them to
 * the server. Refer here: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

/**
 * Export this module as a function accepting 'app', which is an
 * instance of an Express app defined from our main index file going through
 * the index of the 'app' directory, as the first parameter.
 */
module.exports = app => {
    /**
     * We are setting the port that the app will use, prioritizing the
     * first command line argument if present, then the value of PORT from
     * a .env file if present, and would default to 3000 in the absence
     * of both preceding values.
     */
    app.set('port', process.argv[2] || process.env.PORT || 3000);

    /**
     * We set the view (templating) engine as Pug
     * https://pugjs.org/api/getting-started.html
     */
    app.set('view engine', 'pug');

    /**
     * We set the views directory. Where the application would start looking
     * for Pug files that should be rendered. Refer to notes below.
     * 
     * path.dirname() - returns the parent directory of the path you pass to it
     * as argument. https://nodejs.org/api/path.html#path_path_dirname_path
     */
    app.set('views', path.join(path.dirname(__dirname), 'modules'));

    /**
     * Anything beyond this comment are all called middlewares. Notice how we use
     * app.use() here but not define any routes, and instead use modules? That's
     * because this third-party modules created by other developers are also routes,
     * specifically called middlewares (we'll get to this later on). Refer to this
     * link for more info: https://expressjs.com/en/guide/using-middleware.html
     */

    /**
     * Use 'morgan' middleware for HTTP logging purposes
     */
    app.use(morgan('dev'));

    /**
     * Use 'body-parser' middleware to parse data coming from forms and other
     * types of requests (programmatically-made requests, later on this one).
     */

     /** https://github.com/expressjs/body-parser#bodyparserjsonoptions */
    app.use(bodyParser.json());

    /** https://github.com/expressjs/body-parser#bodyparserurlencodedoptions */
    app.use(bodyParser.urlencoded({ extended: true }));
}
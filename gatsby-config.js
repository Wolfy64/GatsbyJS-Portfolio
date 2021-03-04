/**
 * To have full Typescript support with Gatsby
 * https://github.com/progressive-dev/gatsby-typescript-final.git
 */
require('ts-node').register() // This will register the TypeScript compiler
module.exports = require('./src/gatsby/config') // This will load our Typescript application

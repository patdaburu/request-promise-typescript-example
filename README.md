# Using `async-await` and `npm-promise` with TypeScript
Wondering how to use Async/Await with the request module in TypeScript?  So was I.

## About the Project

The sample project contains a `package.json` with some scripts defined.  To simply run the examples, use the following `npm` command:

```bash
npm run main
```

Now, on to the details.

## Promises, Promises

`async-await` is syntactic sugar for Javascript [promises](https://developers.google.com/web/fundamentals/primers/promises), so if you aren't yet familiar with promises, click that link.  We'll be here when you get back. 

In short, you prefix your asynchronous functions with the `async` keyword and `await` suspectds execution until an asynchronous function that returns a *Promise* is fulfilled and unwraps the *Promise* for you so what you get is the value the *Promise* contained.

There's nothing going on you couldn't do manually by constructing new *Promise* instances and unwrapping them yourself, but just as with the preceding paragraphs, `async-await` let's you type the word *Promise* fewer times.


## A Quick Note about ES6 *versus* Earlier Versions

This project contains a pretty standard `tsconfig` file, but you may take note that in the `compilerOptions` it does target `es6`.

```typescript
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es6",
    /* ...etc. */
    }
}
```

[Typescript 2.1](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html) added support for transpiling `async-await` for ES3 and ES5 runtimes by includding a *Promise* pollyfil.

## `request-promise`

The [`request`](https://www.npmjs.com/package/request) module is the go-to toolkit for calling out to web services.  However, there are a couple of cavetas:

* It uses callbacks instead of *Promises*.
* It's written in Javascript, not TypeScript.

Neither of these are insurmountable obstacles, but these facts probably have something to do with why you're reading this right now.

In this example, we'll use the [`request-promise`](https://www.npmjs.com/package/request-promise) module.  It's a Javascript module, but fortunately we can make it visible to TypeScript by grabbing the [`@types/request-promise`](https://www.npmjs.com/package/@types/request-promise) module also.

## Example #1

In this example we simply make an asynchronous call using `async-await` and `request-promise` to get our own IP address.

You can view the code [here](https://github.com/patdaburu/request-promise-typescript-example/blob/master/index.ts).

## Test Links

Need some links to test HTTP GET? Here are a few suggestions.

* http://httpbin.org/ip Returns Origin IP.
* http://httpbin.org/user-agent Returns user-agent.
* http://httpbin.org/headers Returns header dict.
* http://httpbin.org/get Returns GET data.
* http://httpbin.org/post Returns POST data.
* http://httpbin.org/put Returns PUT data.
* http://httpbin.org/delete Returns DELETE data
* http://httpbin.org/gzip Returns gzip-encoded data.
* http://httpbin.org/status/:code Returns given HTTP Status code.
* http://httpbin.org/response-headers?key=val Returns given response headers.
* http://httpbin.org/redirect/:n 302 Redirects n times.
* http://httpbin.org/relative-redirect/:n 302 Relative redirects n times.
* http://httpbin.org/cookies Returns cookie data.
* http://httpbin.org/cookies/set/:name/:value Sets a simple cookie.
* http://httpbin.org/basic-auth/:user/:passwd Challenges HTTPBasic Auth.
* http://httpbin.org/hidden-basic-auth/:user/:passwd 404'd BasicAuth.
* http://httpbin.org/digest-auth/:qop/:user/:passwd Challenges HTTP Digest Auth.
* http://httpbin.org/stream/:n Streams n–100 lines.
* http://httpbin.org/delay/:n Delays responding for n–10 seconds.




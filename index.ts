import request = require('request-promise');

/**
 * This is an asynchronous function that uses async-await with request-promise
 * to fetch a result from a web server.
 * @returns {Promise<string>}
 */
async function getMyUserIp(): Promise<string> {
    /*
    We're expecting to get a simple JSON string from the server.
    It looks something like this: { "origin": "24.177.166.2" }
    To keep this example simple, if we get an error, we'll just
    use it as the "origin" property.
    */
    let response: any = {};
    // Here we go!
    await request.get("http://httpbin.org/ip")
        .then((body) => { response = JSON.parse(body); })
        .catch ((err) => { response = { "origin": err.toString() }; });
    // Now that we have our response, pull out the origin and return it
    // to the caller.
    return response.origin;
}


/**
 * This is an asynchronous function that awaits another asynchronous.
 * @returns {Promise<void>}
 */
async function example1() : Promise<void> {
    // Wait around for the getMyIp() function to return its value.
    let result = await getMyUserIp();
    // Show the people what we got.
    console.log("Your IP address appears to be " + result);
}

// We gotta start somewhere...
example1();  // For this demonstration, we're ignoring the returned Promise.

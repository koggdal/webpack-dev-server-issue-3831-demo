# Demo app for [webpack-dev-server#3831](https://github.com/webpack/webpack-dev-server/issues/3831)

1. `npm install`
2. `npm start`
3. Open this in the browser: http://localhost:8086/product-a

That may trigger the reload loop.

It's not 100% reproducible, so if it doesn't reload, try restarting the server. If the browser page is still trying to ping the Websocket server, it usually kicks back in and starts the reload loop when the server starts back up.

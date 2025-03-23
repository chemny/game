export default {
  async fetch(request) {
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My Site</title>
        </head>
        <body>
          <h1>Hello World!</h1>
        </body>
      </html>
    `, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
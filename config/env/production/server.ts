
export default ({ env }) => ({
    proxy: true,
    url: env('APP_URL', 'https://jotlin-hlrxz.ondigitalocean.app'), // Sets the public URL of the application.
    port: env.int('PORT', 1337),
    app: { 
      keys: env.array('APP_KEYS')
    },
});
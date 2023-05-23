
export default ({ env }) => ({
    proxy: true,
    url: env('APP_URL'), // Sets the public URL of the application.
    port: env.int('PORT'),
    app: { 
      keys: env.array('APP_KEYS')
    },
});
export default {
    srcDir: 'src/',
    server: {
        port: 3000,
        host: '0.0.0.0',
    },

    plugins: [{ src: '~plugins/google-analytics.js', mode: 'client' }],
};

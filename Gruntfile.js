module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-phantomjs-screenshot');
    grunt.registerTask('default', 'phantomjs_screenshot');
    grunt.initConfig({
        phantomjs_screenshot: {
            options: {
                viewport: '1024x768',
                server: 'http://komasui.boobie.jp/',
            },
            mockup: {
                expand: true,
                cwd: 'www/',
                src: ['**/*.html'],
                dest: 'capture/',
                ext: '.png'
            },
        },
    });
};

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-phantomjs-screenshot');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'phantomjs_screenshot']);

    grunt.initConfig({
        clean: {
            capture: {
                src: ['capture/'],
            },
        },

        phantomjs_screenshot: {
            options: {
                viewport: '1024x768',
                server: 'http://komasui.boobie.jp/',
            },
            pc: {
                expand: true,
                cwd: 'www/',
                src: ['**/*.html'],
                dest: 'capture/pc/',
                ext: '.png'
            },
            mobile: {
                options: {
                    viewport: '320x568',
                },
                expand: true,
                cwd: 'www/',
                src: ['**/*.html'],
                dest: 'capture/mobile/',
                ext: '.png'
            },
        },

    });
};

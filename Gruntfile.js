module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		stylus: {
			compile: {
				options: {
					compress: false,
					linenos: false,
					paths: ['styl/helpers'],
					import: ['_vars']
				},
				files: [{
					expand: true,
					cwd: 'styl',
					src: '*.styl',
					dest: 'css',
					ext: '.css'

				}]
			}
		},
		
		csslint: {
			reset: {
				options: {
				},
				src: []
			},
			layout: {
				options: {
				},
				src: []
			}
		},
		
		concat: {
			dist: {
				files: {
					'css/style.css': [
						'css/reset.css',
						'css/typographic.css',
						'css/grid.css',
						'css/customs.css',
						'css/media.css'
					]
				}
			}
		},
		
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: '*.css',
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-remove');

	grunt.registerTask('default', ['stylus', 'concat', 'cssmin']);
};
module.exports=function(grunt){
	grunt.initConfig({
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3 // png图片优化水平，3是默认值，取值区间0-7
				},
				files: [
					{
						expand: true, // 开启动态扩展
						cwd: "src/", // 当前工作路径
						src: ["**/*.{png,jpg,gif}"], // 要出处理的文件格式(images下的所有png,jpg,gif)
						dest: "images/" // 输出目录(直接覆盖原图)
					}
				]
			}
		}
	})
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.registerTask('default', ['imagemin']);
}
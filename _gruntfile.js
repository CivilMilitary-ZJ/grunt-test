module.exports=function(grunt){
	grunt.initConfig({
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3 // pngͼƬ�Ż�ˮƽ��3��Ĭ��ֵ��ȡֵ����0-7
				},
				files: [
					{
						expand: true, // ������̬��չ
						cwd: "src/", // ��ǰ����·��
						src: ["**/*.{png,jpg,gif}"], // Ҫ��������ļ���ʽ(images�µ�����png,jpg,gif)
						dest: "images/" // ���Ŀ¼(ֱ�Ӹ���ԭͼ)
					}
				]
			}
		}
	})
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.registerTask('default', ['imagemin']);
}
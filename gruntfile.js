module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),//grunt api ， pkg 随便起的名字
    uglify: {//任务名字：死的（和插件名字一样）
      options: {//选项：死的（这里是任务级别的options，可选的，没有可以不写）
      	//banner 是options的属性，在文档中可以查看，死的
      	//<%=%> 字符串的模板语法，引用当前对象中的属性
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy#mm#dd") %> */\n'
      },
      build2: {//目标 ： 名字随便起
      	options:{},//目标级别的options，可选，没有可以不写
        src: 'c.js',
     	dest: 'c.min.js'
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};


===================================
简洁 格式：支持额外属性
	jshint:{
		foo:{//只有原文件，没有目标文件；就是说，不会生成新的文件
			src:['src/aa.js','src/bb.js']  //一个文件是字符串，多个文件就是数组咯
		}
	}

	concat:{
		foo:{
			src:'src/aa.js',//原文件
			dest:'dest/aa.min.js'//目标文件
		}
	}

文件对象 格式：
	concat:{//任务task
		foo:{//target
			files:{	//files属性，死的,文件对象，意思就是以文件名为属性，值是一个对象
				'dest/a.js':['src/aa.js','src/aaa.js'],//没有src和dest属性，直接写对象的key和value，key是dest，value是src
				'dest/a1.js':['src/aa1.js','src/aaa1.js']
			}
		}
	}

文件数组 格式：支持额外属性
	concat:{
		foo:{
			files:[//文件 是一个 数组 ， 里面是 对象
				{src:['src/aa.js','src/aaa.js'],dest:'dest/a.js'},
				{src:['src/aa1.js','src/aaa1.js'],dest:'dest/a1.js'}
			]
		}
	}
	// my_target: {
 //      files: {
 //        'dest/output.min.js': ['src/input.js']
 //      }
 //    }



var posts=["2024/09/07/Linux基础/","2023/10/09/ECharts-可视化/","2023/12/07/Python-Requests数据爬取/","2023/11/19/Python-scrapy数据爬取/","2023/10/06/Spark编写-3/","2023/09/25/Spark编写-第一部分-1/","2023/08/22/Zoomit语法/","2023/09/26/Spark编写-第一部分-2/","2024/01/23/hadoop-hdfs命令基本操作/","2023/09/23/hadoop-服务安装/","2023/06/30/markdown/","2024/01/21/国赛题-第五套题/","2024/01/23/国赛题-第七套题/","2024/01/19/国赛题-第三套题/","2024/01/24/国赛题-第八套题/","2024/01/22/国赛题-第六套题/","2024/01/25/国赛题-第十套题/","2024/01/20/国赛题-第四套题/","2023/09/11/精灵图/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
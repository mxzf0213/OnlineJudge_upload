功能：使qduoj能够像cf一样查看测试数据：
修改：
1.
先修改judge-server，因为oj-backend依赖judge-server，修改judge-server会重初始化oj-backend
替换命令：
docker cp judge-client.py judge-server:/code/
重启：
docker-compose stop
docker-compose up -d
2.
修改oj-backend
前端：
docker cp dist/ oj-backend:/app/
后端：
docker cp oj.py oj-backend:/app/submission/views/
docker cp dispatcher.py oj-backend:/app/judge/
重启：
docker-compose stop
docker-compose up -d

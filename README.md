# REACT EXPRESS(NODE SERVER) NGINX DOCKERSTACK

[[개발회고\] Docker Swarm(Docker Stack) + React + Express(Node Server) + Nginx + Reverse Proxy (tistory.com)](https://tonyhan18.tistory.com/329)

위의 링크로 가면 만든 것을 확인할 수 있다.

# 사용기술
REACT<br>
EXPRESS<br>
NODEJS<br>
DOCKER<br>
DOCKER STACK<br>
DOCKER SWARM<br>

# 프로젝트 구조
![img-1.png](img-1.png)

# 실행방법
환경을 반드시 가상머신들 manager, kvm1, kvm2 를 만들고<br />
manager의 /etc/hosts에 kvm1, kvm2를 등록해주자<br />
그 다음 아래의 명령어를 순서대로 적어서 Enter<br />
이 과정을 모르겠다면 <br />
<br />
```bash
# manager에서
docker swarm init
```

manager에서 docker swarm init 시 나오는 토큰 값을 가지고<br />
kvm1, kvm2 에 입력후 Enter<br />

```bash
cd client
npm install
npm run build
docker build -f Dockerfile.dev -t tonyhan18/react:1.0 .

cd ../server
npm install
docker build -t tonyhan18/express:1.0 .
docker image push tonyhan18/express:1.0

cd ..
docker stack deploy -c docker-compose.yml swarm
---
# 삭제시
docker stack rm swarm
```


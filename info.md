pug에서는 들여쓰기로 부모 자식 요소를 정함
예)
html
head
body

pug에서 layouts 만들기
예)
main.pug 파일
header
main
block content < block content를 할 시에 다른 pug파일에서 block content
를 친후 작성하면 header과 footer 사이에 main에 들어감
footer

home.pug 파일
extends ./main
block content
p Home

pug에서 partials로 쪼개기
예)  
header.pug
h1 예시
footer.pug
h2 예시
사용
main
include ./header
main
block content
include ./footer

#{} < pug에서 자바스크립트를 쓰는 방식
예) #{new Date().getFullYear()}

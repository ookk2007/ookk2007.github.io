---
layout: post
title: Github Pages(github.io) 만들기 (with Hydeout) - 3
date: '2025-07-03 21:19:23 +0900'
categories: Tutorial
tags: Github Github-Pages Markdown
---

안녕하세요!

또 오랜만에 돌아왔습니다..ㅎㅎ

지난 시간까지는 블로그를 만들고, 커스터마이징하는 방법을 살펴보면서 블로그의 기초를 다져보았는데요.

그러면 이제 블로그에 글을 써봐야겠죠!

이번 시간에는 블로그에 글을 쓰는 방법을 소개해 드리겠습니다.

<!--more-->

참고로, 저는 Jekyll에 <b>Hydeout</b> 테마를 적용하여 블로그를 만들었습니다.

다른 테마들의 경우에도, 제가 소개할 내용이 어느 정도 적용될 순 있으나, 디테일한 부분에서는 차이가 있을 수 있다는 점 참고 부탁드립니다.

<br>

## 1. 포스팅의 기본

블로그에 글을 쓰는 방법은 이론상 아주 간단합니다.

Github Repository(인터넷 저장소)의 <b>'_posts'</b> 폴더 안에 <b>'YYYY-MM-DD-Title.md'</b> 형식의 파일을 만들고, 그 안에 글을 쓰면 됩니다!

지난 튜토리얼에서, Local Repository의 파일들을 추가/삭제/수정하고,<br>Github Desktop의 Commit & Push를 통해, 그 변경 사항을 Github Repository에 업로드하는 과정을 수행해 보았는데요.

이번에도 마찬가지로, Local Repository의 <b>'_posts'</b> 폴더 안에 글을 작성하고, 그 파일을 Commit & Push하여 Github Repository에 반영하면 됩니다!

![placehorder](/imgs/github44.JPG)

VSCode를 통해 _posts 폴더를 살펴보면, 기본적으로 예시 포스트들이 들어있는데요.

![placehorder](/imgs/github22.JPG)

그 중에서, 블로그 첫 화면에 가장 먼저 뜨는 'Welcome to Jekyll!'에 대한 파일을 확인해보겠습니다.

_posts 폴더 내의 파일 중에 'XXXX-XX-XX-welcome-to-jekyll.markdown'(블로그 생성일에 따라 XXXX는 달라짐)를 열어봅시다.

![placehorder](/imgs/github45.JPG)

이 글은 Markdown이라는 문법으로 작성된 글인데요.

웹 페이지 상에 나타나는 글과 비교해보면, 어떤 문법이 어떻게 적용되는지 쉽게 알 수 있을 것입니다.

예를 들어, 맨 첫번째 줄의 `_posts`처럼 코드 강조 스타일을 적용하려면, 백틱( ` )으로 텍스트를 감싸면 되고, <br>

{% highlight c %}
int main(){
  printf("hell0\n");
}
{% endhighlight %}

위와 같이 코드 블럭 스타일을 적용하려면 코드 앞 뒤를 {% raw %} {% highlight LANGUAGE %}, {% endhighlight %} {% endraw %}로 감싸면 된다는 것을 알아낼 수 있습니다.<br>(LANGUAGE에 c, python 등 강조하고 싶은 언어를 넣으면 됩니다.)

이 외에도 다른 예시 포스트들을 확인해보면, 더 많은 스타일 문법들을 확인해볼 수 있습니다!

이번 글에서는 자주 사용되는 문법 몇 가지만 소개해 드리겠습니다!

<br>

## 2. 포스팅에 사용되는 문법

### 2-1. Front Matter

Front Matter는 Jekyll에서 사용하는 메타데이터(포스트에 대한 부가 정보)를 나타내는 데 사용합니다.

앞선 예시 포스트에서도 나왔듯이, 가장 상단에 다음과 같은 문법으로 작성하면 됩니다.
``` yaml
{% raw %}
---
layout: post -> 게시글은 post로 고정
title: Github Pages 튜토리얼 3 -> 게시글 제목 자유롭게 작성
date: '2025-07-03 21:19:23 +0900' -> 작성 시간 임의로 설정
categories: Tutorial -> 게시글이 속할 카테고리 설정
tags: Github Github-Pages Markdown -> 게시글과 연관된 태그들 띄어쓰기로 구분
---
{% endraw %}
```

이전 튜토리얼을 같이 따라하셨다면, '카테고리'와 '태그'를 사용하실 수 있을 것입니다.

이 때, 태그에는 별다른 제약이 없지만, 카테고리에는 'category'폴더 내에 존재하는 카테고리명을 작성해야, 카테고리별 페이지에 해당 포스트가 분류됩니다.

그리고 작성 시간을 미래(몇 시간 후, 며칠 후...)로 설정하면 작성한 게시글이 블로그에 나타나지 않을 수도 있으니 주의하시길 바랍니다!

<br>

### 2-2. Markdown 문법

게시글의 확장자인 .md(혹은 .markdown)는 Markdown 파일임을 의미하므로, Markdown 문법을 사용할 수 있습니다.

이번 글에서는 제가 자주 사용하는 기본적인 Markdown 문법을 설명드릴 것이며,
\
인터넷 검색이나 AI 서비스를 통해 원하는 문법을 찾아보셔도 됩니다.

#### 1) 소제목

```
# 제목
## 소제목1
### 소제목2
#### 소제목3
##### 소제목4
###### 소제목5
```

<ins><b>적용 예시</b></ins>

> # 제목
> ## 소제목1
> ### 소제목2
> #### 소제목3
> ##### 소제목4
> ###### 소제목5


이런 식으로 #의 갯수에 따라 총 6단계까지 소제목을 설정할 수 있습니다.

<br>

#### 2) 문단 및 줄바꿈

Markdown 문법에서는, 일반적인 문서와 달리 엔터(줄바꿈)를 인식하지 않습니다.

예를 들어 다음과 같은 글을 Markdown 파일에 작성하면,

```
이번주 계획
월요일: 운동
화요일: 영화 보기
수요일: 맛집 탐방
```

실제로는 이렇게 나옵니다.

>이번주 계획
>월요일: 운동
>화요일: 영화 보기
>수요일: 맛집 탐방

그렇다면 Markdown에서 줄바꿈은 어떻게 할까요?

제가 알기로는 2가지 방법이 있습니다.

1. 문단 나누기(엔터 2번)
2. 줄바꿈 문자('\\', 스페이스 2번) 넣기

2가지 방법을 모두 보여드리자면 다음과 같습니다.

```
안녕하세요

엔터를 2번 입력하면

문단이 나누어져요.

그리고 줄바꿈 문자(역슬래시 or 스페이스 2번)를 줄 끝에 넣고\
엔터를 1번 누르면  (스페이스 2번)
바로 다음 줄로 넘어가요.
```
<ins><b>적용 예시</b></ins>

>안녕하세요
>
>엔터를 2번 입력하면
>
>문단이 나누어져요.
>
>그리고 줄바꿈 문자(역슬래시 or 스페이스 2번)를 줄 끝에 넣고  
>엔터를 1번 누르면  
>바로 다음 줄로 넘어가요.

예시를 보면 알 수 있듯이 문단을 나누면 그 사이에 공백 1줄이 생기게 되는데요.

저는 이게 가독성이 더 좋은 것 같아서 애용하고 있지만,\
공백 1줄이 생기는 게 싫으신 분들은 줄바꿈 문자를 넣는 방법을 사용하시면 될 것 같습니다.

<br>

#### 3) 리스트

숫자 리스트, 불릿 리스트를 만드는 방법은 다음과 같습니다.

```
1. 숫자
2. 리스트
3. 예시
    1. 하위 리스트 예시(4칸 들여쓰기)

* 불릿
* 리스트
* 예시
    * 하위 리스트 예시(4칸 들여쓰기)
```

<ins><b>적용 예시</b></ins>

>1. 숫자
>2. 리스트
>3. 예시
>    1. 하위 리스트 예시(4칸 들여쓰기)
>
>* 불릿
>* 리스트
>* 예시
>    * 하위 리스트 예시(4칸 들여쓰기)

<br>

#### 4) 인용문

인용문을 만드는 방법은 다음과 같습니다.

```
> 인용문1\
> 들여쓰기 1번
>
>> 인용문2\
>> 들여쓰기 2번
>
> 다시 인용문1
```

<ins><b>적용 예시</b></ins>

> 인용문1\
> 들여쓰기 1번
>
>> 인용문2\
>> 들여쓰기 2번
>
> 다시 인용문1

<br>

#### 5) 글자 스타일(볼드체, 기울임체)

Markdown 문법에서 글자를 굵게, 혹은 기울이는 방법은 다음과 같습니다.
```
이것도 **굵게**, 저것도 __굵게__

이것도 *기울게*, 저것도 _기울게_
```

<ins><b>적용 예시</b></ins>

>이것도 **굵게**, 저것도 __굵게__
>
>이것도 *기울게*, 저것도 _기울게_

<br>

#### 6) 코드 블럭

Markdown 문법에서 코드 블럭을 만드는 방법은 다음과 같습니다.

>\`\`\` python  
>x = 5  
>y = 3  
>print(x + y)  
>\`\`\`

백틱(`) 3개로 코드를 감싸고, 상단의 백틱 3개 오른쪽에 강조하고 싶은 언어를 넣으면 됩니다.

<ins><b>적용 예시</b></ins>

``` python  
x = 5  
y = 3  
print(x + y)  
```

<br>

#### 7) 하이퍼링크

클릭 시 특정 링크로 이동하는 '하이퍼링크'를 만드는 방법은 다음과 같습니다.

```
[Google](https://www.google.com/)

[Naver](https://www.naver.com/){:target="_blank" rel="noopener noreferrer"}
```

대괄호[ ] 안에 표시될 텍스트를 입력하고, 소괄호( ) 안에 이동할 링크를 입력하면 됩니다.

참고로, `{:target="_blank" rel="noopener noreferrer"}`라는 코드를 뒤에 붙이면, 해당 링크가 새 창에서 열립니다.

<ins><b>적용 예시</b></ins>

[Google](https://www.google.com/)

[Naver](https://www.naver.com/){:target="_blank" rel="noopener noreferrer"}

<br>

#### 8) 이미지 삽입

게시글 내에 이미지를 삽입하는 방법은 다음과 같습니다.

```
![placehorder](/imgs/bg_color.jpg)

![smile](https://em-content.zobj.net/source/microsoft-teams/400/smiling-face-with-smiling-eyes_1f60a.png)
```

하이퍼링크와 비슷하지만, 맨 앞에 !를 붙인다는 차이점이 있습니다.

대괄호[ ] 안에는 이미지가 로딩되지 않을 때 보여줄 '대체 텍스트'를 넣으면 되고,\
소괄호( ) 안에는 이미지의 경로(링크)를 입력하면 됩니다.

이 링크는 본인의 웹페이지 내부 경로를 넣어도 되고, 아예 외부 경로를 넣어도 됩니다.

<ins><b>적용 예시</b></ins>

![placehorder](/imgs/bg_color.jpg)

![smile](https://em-content.zobj.net/source/microsoft-teams/400/smiling-face-with-smiling-eyes_1f60a.png)

<br>

### 2-3. HTML 문법

Jekyll은 Markdown 문법으로 작성된 글을 HTML 형태로 변환하여 웹사이트에 보여줍니다.

따라서 게시글에 HTML 태그를 입력하면, 실제 웹사이트에서도 해당 태그가 적용된 채로 컨텐츠가 표시됩니다.

HTML에는 워낙 방대한 종류의 태그들이 있기 때문에, 이번 글에서는 제가 아는 태그들만 소개해 보겠습니다.

#### 1) 공백 줄 추가

Markdown에서 줄바꿈을 하는 방법은 '문단 나누기'와 '줄바꿈 문자 넣기'가 있다고 했습니다.

하지만 HTML 태그 중 `<br>`이라는 태그를 사용해도 줄바꿈을 할 수 있습니다.

특히, '문단 나누기' 방법은 문단 사이가 무조건 공백 1줄로 고정되어 있기 때문에, `<br>` 태그를 같이 활용하면 더 긴 공백 줄을 만들 수 있습니다.

물론, 줄바꿈 문자(\\)와 기능은 똑같기 때문에, 개인의 취향에 맞게 사용하시면 될 것 같습니다.

```
이것은

<br>

공백줄
<br>
테스트<br>
입니다.
```

<ins><b>적용 예시</b></ins>

>이것은
>
><br>
>
>공백줄
><br>
>테스트<br>
>입니다.

<br>

#### 2) 글자 스타일(볼드체, 기울임체, 밑줄, 취소선, 윗첨자, 아랫첨자)

Markdown 문법과 마찬가지로, HTML 태그 중에서도 글자 스타일을 지정하는 태그가 있습니다.

다음은 HTML 글자 스타일 태그 사용 예시입니다.

```
이것은 <b>b 태그</b>\
이것은 <strong>strong 태그(좀 더 진함)</strong>\
이것은 <em>em 태그</em>\
이것은 <ins>ins 태그</ins>\
이것은 <del>del 태그</del>\
이것은 <cite>cite 태그</cite>\
이것은 <abbr title="설명설명">abbr 태그. 마우스를 올려 놓으면 title 속성에 입력한 설명이 보입니다.</abbr>\
이것은 <sup>sup 태그</sup>(윗첨자)\
이것은 <sub>sub 태그</sub>(아랫첨자)\
<b><ins>한번에 여러 태그를 사용할 수도 있습니다.</ins></b>
```
<ins><b>적용 예시(이것도 b 태그, ins 태그 사용한 것)</b></ins>

>이것은 <b>b 태그</b>\
>이것은 <strong>strong 태그(좀 더 진함)</strong>\
>이것은 <em>em 태그</em>\
>이것은 <ins>ins 태그</ins>\
>이것은 <del>del 태그</del>\
>이것은 <cite>cite 태그</cite>\
>이것은 <abbr title="설명설명">abbr 태그. 마우스를 올려 놓으면 title 속성에 입력한 설명이 보입니다.</abbr>\
>이것은 <sup>sup 태그</sup>(윗첨자)\
>이것은 <sub>sub 태그</sub>(아랫첨자)\
><b><ins>한번에 여러 태그를 사용할 수도 있습니다.</ins></b>

<br>

#### 3) a 태그(하이퍼링크)

a 태그는 텍스트 클릭 시 특정 링크로 이동하는 하이퍼링크를 만들어주는 태그입니다.

사용 예시는 다음과 같습니다.

```
<a href="https://www.google.com/">https://www.google.com/</a>

<a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer">https://www.naver.com/</a>
```

a 태그 내에 `target="_blank" rel="noopener noreferrer"`를 입력하면 새창에서 링크를 열 수 있습니다.

Markdown의 하이퍼링크 문법과 동일한 기능이지만, 간혹 Markdown 문법이 적용될 수 없는 환경에서 대신 사용할 수 있습니다.

<ins><b>적용 예시</b></ins>

><a href="https://www.google.com/">https://www.google.com/</a>
>
><a href="https://www.naver.com/" target="_blank" rel="noopener noreferrer">https://www.naver.com/</a>

<br>

#### 4) img 태그(이미지)

img 태그는 이미지를 삽입시켜주는 태그입니다.

img 태그 역시 Markdown의 이미지 삽입 문법과 동일한 기능이지만, Markdown 문법이 적용될 수 없는 환경에서 대신 사용할 수 있습니다.

```
<img src="/imgs/bg_color.jpg" alt="sidebar_background_color">
```

참고로, alt는 이미지가 로딩되지 않을 때 보여줄 '대체 텍스트'를 설정하는 속성입니다.

<ins><b>적용 예시</b></ins>

<img src="/imgs/bg_color.jpg" alt="sidebar_background_color">

<br>

#### 5) 토글 텍스트

특정 텍스트를 클릭하면 숨겨진 글이 나타나도록 하는 기능입니다.

튜토리얼에서도 몇 번 사용한 적이 있으며, `<details>`와 `<summary>` 태그를 사용합니다.

```
<details>
  <summary>에러 해결 방법</summary>

  <p>이 에러를 해결하기 위해서, 왼쪽 상단의 <strong>File -> Options...</strong>를 클릭해서 설정창에 들어갑니다.<br>
    그리고 'Git' 옵션에 들어가서, Name과 Email에 {username}과 {github_id}를 입력하고, 'Save'를 누릅니다.<br></p>
  <img src="/imgs/github10.JPG" alt="github_desktop_error_pic">
</details>
```

다음과 같이, `<details>` 태그로 숨김 처리할 컨텐츠를 감싸고, 그 안에 `<summary>` 태그로 요약 텍스트를 적어주면 됩니다.

그리고 숨김 처리할 컨텐츠에는 텍스트(`<p>` 태그) 뿐만 아니라, 이미지(`<img>` 태그) 등도 가능합니다.

<ins><b>적용 예시</b></ins>

><details>
>  <summary>에러 해결 방법</summary>
>
>  <p>이 에러를 해결하기 위해서, 왼쪽 상단의 <strong>File -> Options...</strong>를 클릭해서 설정창에 들어갑니다.<br>
>    그리고 'Git' 옵션에 들어가서, Name과 Email에 {username}과 {github_id}를 >입력하고, 'Save'를 누릅니다.<br></p>
>  <img src="/imgs/github10.JPG" alt="github_desktop_error_pic">
></details>

<br>

#### 6) 테이블(표)

테이블(표)를 만들고 싶을 때는, HTML의 `<table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>` 태그를 사용할 수 있습니다.

예시를 보시면 사용법을 대략 알아차릴 수 있을 겁니다.

```
<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>국어 성적</th>
      <th>수학 성적</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>96</td>
      <td>61</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>89</td>
      <td>84</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>100</td>
      <td>95</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>평균</td>
      <td>95</td>
      <td>80</td>
    </tr>
  </tfoot>
</table>
```

<ins><b>적용 예시</b></ins>

><table>
>  <thead>
>    <tr>
>      <th>이름</th>
>      <th>국어 성적</th>
>      <th>수학 성적</th>
>    </tr>
>  </thead>
>  <tbody>
>    <tr>
>      <td>Alice</td>
>      <td>96</td>
>      <td>61</td>
>    </tr>
>    <tr>
>      <td>Bob</td>
>      <td>89</td>
>      <td>84</td>
>    </tr>
>    <tr>
>      <td>Charlie</td>
>      <td>100</td>
>      <td>95</td>
>    </tr>
>  </tbody>
>  <tfoot>
>    <tr>
>      <td>평균</td>
>      <td>95</td>
>      <td>80</td>
>    </tr>
>  </tfoot>
></table>

<br>

### 2-4. 리퀴드 문법

리퀴드 문법이란 `{% raw %}{% abc %}{% endraw %}` 형식으로 이루어진 특수 명령어들을 의미합니다.

지난 <a href="/tutorial/2025/05/25/Github-Pages-2.html" target="_blank" rel="noopener noreferrer">커스터마이징 튜토리얼</a>에서 이렇게 생긴 문법을 몇 차례 보셨을 겁니다.

`{% raw %}{% include %}, {% for %}, {% assign %}{% endraw %}` 등 웹사이트 구성에 유용한 명령어들도 있지만, 이번 글에서는 포스팅에 도움이 되는 리퀴드 문법만 살펴보도록 하겠습니다.

#### 1) {% raw %}{% highlight %}{% endraw %}

{% raw %}{% highlight %}{% endraw %}는 코드 블럭을 만드는 명령어입니다.

Markdown 문법의 코드 블럭 문법(백틱 3개)와 동일한 기능을 제공합니다.

>{% raw %}{% highlight javascript %}\
>let x, y;\
>x = 5;\
>y = 6;\
>document.getElementById("demo").innerHTML = x + y;\
>{% endhighlight %}{% endraw %}

<ins><b>적용 예시</b></ins>

{% highlight javascript %}
let x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;
{% endhighlight %}

<br>

#### 2) {% raw %}{% gist %}{% endraw %}

gist는 github에서 제공하는 기능으로, 간단한 코드 스니팻(코드 조각), 메모, 로그 등을 저장하고 공유할 수 있는 기능입니다.

![gist](/imgs/gist.jpg)

github 홈페이지에서 오른쪽 상단의 프로필 아이콘을 누른 후, 'Your gists'를 클릭하면, gist 페이지에 들어갈 수 있습니다.

gist 페이지에서 'Create new gist'를 눌러 다음과 같은 gist를 추가해 보았습니다.

![gist](/imgs/gist2.jpg)

secret gist와 public gist를 선택할 수 있었는데, 링크만 있다면 secret gist도 누구든지 읽을 수 있기 때문에 저는 secret gist를 선택했습니다.

![gist](/imgs/gist3.jpg)

gist를 만들면 다음과 같은 페이지가 나오는데, 이 코드를 다른 사람들에게 공유하려는 목적이라면, 그냥 이 페이지 링크를 공유해도 되지만,\
블로그에 해당 코드를 첨부하고 싶다면 {% raw %}{% gist %}{% endraw %} 명령어를 사용할 수도 있습니다.

먼저, 위에서 빨간색 네모로 표시한 해시값(61398ab50e35315a5e2cdfeb16b8a52a)과 파일명(gistfile1.txt)을 복사해주세요.

그리고 다음과 같이 gist 명령어를 입력해보세요.
```
{% raw %}{% gist 61398ab50e35315a5e2cdfeb16b8a52a gistfile1.txt %}{% endraw %}
```

그러면 다음과 같이 gist에 입력한 코드가 블로그에도 똑같이 나타나는 것을 확인할 수 있을 것입니다.

드래그-복사를 막아놓은 블로그에서 코드만 복사 가능하게 하는 방안으로도 유용할 것 같습니다.

{% gist 61398ab50e35315a5e2cdfeb16b8a52a gistfile1.txt %}

<br>

#### 3) {% raw %}{% raw %}{% endraw %}

raw는 특정 텍스트를 Markdown 문법, HTML 문법, 리퀴드 문법으로 적용하지 않고, 글자 그대로 출력하고 싶을 때 사용하는 명령어입니다.

예를 들어, 지금 이 글처럼 리퀴드 문법을 설명하려고 할 때 그냥 {% raw %}{% gist %}{% endraw %}를 입력하면, Jekyll은 이를 명령어로 인식하고 {% raw %}{% gist %}{% endraw %}라는 텍스트 대신 gist의 코드 블럭을 출력하려고 할 것입니다.

방금 전에 보신 `{% raw %}{% gist 61398ab50e35315a5e2cdfeb16b8a52a gistfile1.txt %}{% endraw %}`라는 명령어도, 실제로는 이렇게 입력했던 것입니다.

> {% raw %}&#123;% raw %&#125;{% gist 61398ab50e35315a5e2cdfeb16b8a52a gistfile1.txt %}&#123;% endraw %&#125;{% endraw %}

코드가 글자 그대로 출력되기를 원할 때, 이렇게 {% raw %}{% raw %}{% endraw %}와 {% raw %}&#123;% endraw %}{% endraw %}로 감싸면 된다는 것을 기억하시길 바랍니다!

<br>

### 2-5. HTML 이스케이프 문자

{% raw %}{% raw %}{% endraw %}와 마찬가지로, 특정 문자를 쓰면 명령어로 인식되는 상황에서 글자 그대로를 출력하고 싶을 때, HTML 이스케이프 문자를 사용할 수 있습니다.

기본적인 사용법은 다음과 같습니다.

>&#ASCII;

ASCII 부분에 원하는 문자의 아스키 코드 값(10진수)을 적어주면 됩니다.

예를 들어, &#123;% raw %&#125;를 출력하고 싶은 상황에서는 `&#123;% raw %&#125;`로 적어주면 됩니다.

<br>

### 2-6. &#60;&#33;&#45;&#45;more&#45;&#45;&#62;

&#60;&#33;&#45;&#45;more&#45;&#45;&#62;은 HTML의 주석 표현이지만, 지난 튜토리얼에서 언급했듯이, 메인 페이지에서 게시글의 내용을 간략히 보여주는 경계에 대한 표현입니다.

![placehorder](/imgs/more1.jpg)

제 블로그 메인 페이지에서 현재 글을 보면, <ins>'이번 시간에는 블로그에 글을 쓰는 방법을 소개해 드리겠습니다.'</ins>까지 나와있는 것을 볼 수 있습니다.

![placehorder](/imgs/more2.jpg)

실제로 이 게시글 파일을 확인해보면, 해당 문장 뒤에 &#60;&#33;&#45;&#45;more&#45;&#45;&#62;를 삽입해 놓은 것을 볼 수 있습니다.

이 표현은 메인 페이지에서 보여질 게시글의 분량을 조절할 수도 있고, 또 스포 방지도 되는 등 유용하게 사용 가능하니 적극 사용해보시기 바랍니다!

<br>

## 3. 마무리

오늘은 블로그에 글을 쓰는 방법과 제가 갖고 있는 노하우들을 소개해드렸습니다.

이제 여러분들도 블로그에 자신만의 창작물을 마음껏 만들어보세요!

다음 시간에는 블로그를 더 다듬고 홍보하는 방법에 대해서 알아보겠습니다.

그러면 다음에 만나요~ 안녕~~

<br>

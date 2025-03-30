---
layout: post
title: Github Pages(github.io) 만들기 (with Hydeout) - 1
date: '2025-03-29 10:19:23 +0900'
categories: tutorial
---

안녕하세요!

블로그를 만들고나서 처음으로 글을 써보고 있습니다. ㅎㅎ

이번 포스팅에서는 'Github Pages로 블로그를 만드는 방법'에 대해서 다루어보고자 합니다.

<!--more-->

참고로, 이 블로그는 <strong>'Hydeout'</strong>이라는 테마를 기반으로 만들어졌습니다.

그래서 저는 <strong>'Hydeout'</strong> 테마를 사용해서 블로그를 만드는 방법을 소개해드리겠습니다.

다른 테마도 부분적으로는 도움이 될 수 있습니다.

그럼 시작하겠습니다!

## 0. Github Pages란?

Github Pages는 [github](https://github.com/){:target="_blank" rel="noopener noreferrer"}에서 제공하는 웹 호스팅 서비스입니다.

이를 통해, 온라인 쇼핑몰, 커뮤니티, 블로그 등등 다양한 사이트를 만들 수 있으며, 많은 개발자들이 github pages로 본인의 블로그를 만듭니다.

인터넷 검색을 하다가 종종 <strong>'github.io'</strong>라는 도메인의 사이트를 볼 수 있는데, 이 사이트들이 모두 github pages를 이용해 만든 사이트입니다.

github 계정을 갖고 있는 사람이라면 누구든 이 서비스를 무료로 사용할 수 있으며, github repository에 서버 리소스들을 push할 때마다 곧바로 웹사이트에 반영이 되기 때문에, github을 사용하던 사람들에게는 참 유용한 웹 호스팅 서비스라고 할 수 있습니다.

게다가 블로그를 처음부터 끝까지 본인의 취향대로 꾸밀 수 있기 때문에, 기존 블로그 플랫폼(네이버, 티스토리 등)에서 불가능했던 기능들을 얼마든지 구현할 수 있습니다.

다만, 자유도가 높다는 것은 그만큼 사이트를 만드는 난이도가 높다는 뜻이기도 합니다.

하지만 이번 포스팅만 잘 참고하시면, 블로그를 만드는 데 전혀 어려움이 없으실 겁니다!!

## 1. Github Pages 생성

앞에서 말씀드렸다시피, Github Pages를 사용하려면, [github](https://github.com/){:target="_blank" rel="noopener noreferrer"} 계정이 있어야 합니다.

[github](https://github.com/){:target="_blank" rel="noopener noreferrer"} 계정이 없으신 분들은 회원가입부터 해주시길 바랍니다.

github에 로그인을 한 후, 오른쪽 상단의 <strong>'+'</strong> 버튼을 누르고, <strong>'New Repository'</strong> 메뉴를 클릭해주세요.

![placehorder](/imgs/github1.JPG)

그리고 위 사진을 참고해서 다음의 사항들을 입력해주세요.

* Repository name: {username}.github.io -> owner에 나와있는 본인의 username을 동일하게 입력해주세요.
* 'Public'에 체크해주세요.
* 'Add a README file'에 체크해주세요.

다 되셨으면, 'Create repository'를 눌러주세요.

![placehorder](/imgs/github2.JPG)

그러면 Repository가 하나 생성될 것입니다.

이제 위 사진을 참고해서 Github Pages를 위한 설정을 해줍시다.

1. 'Settings' 메뉴 클릭
2. 'Pages' 옵션 클릭
3. 'Build and deployment'가 위 사진과 같이 설정되어 있는지 확인합니다. 만약 다르게 되어있다면, 위 사진에 맞추어 수정해주세요.

그리고 잠시 후에 '{username}.github.io' 주소로 접속해보세요.

![placehorder](/imgs/github3.JPG)

다음과 같이 나오면 성공입니다.

## 2. [Github Desktop](https://github.com/apps/desktop){:target="_blank" rel="noopener noreferrer"}, [VSCode](https://code.visualstudio.com/){:target="_blank" rel="noopener noreferrer"} 설치

다음으로, [Github Desktop](https://github.com/apps/desktop){:target="_blank" rel="noopener noreferrer"}과 [VSCode](https://code.visualstudio.com/){:target="_blank" rel="noopener noreferrer"}를 설치해줍니다.

Github Desktop은 기존의 Command Line 명령어로 사용해야 했던 git을 GUI 형태로 만든 프로그램으로, 초보자도 쉽게 따라할 수 있다는 장점이 있습니다.

만약 본인이 git 명령어를 다루는 데에 익숙하고 CLI로 작업하는 것이 편하다면, Github Desktop을 설치하지 않으셔도 됩니다.

다만, 본 튜토리얼에서는 Github Desktop을 사용해서 Repository를 관리하겠습니다.

VSCode는 다목적 텍스트 에디터로, 여러 소스 코드들과 게시글을 추가 및 수정하는 용도로 사용할 프로그램입니다.

VSCode 역시 필수 프로그램은 아니지만, 본 튜토리얼에서는 VSCode를 사용하겠습니다.

### 2-1. Github Desktop 사용해보기

Github Desktop을 실행하고 본인의 Github 계정으로 로그인하면, 본인의 Repository들이 나오는데, 그 중에서 이전에 만든 '{username}.github.io' Repository를 선택하고 Clone합니다.

![placehorder](/imgs/github4.JPG)

그러면 다음과 같은 화면이 나오는데, <strong>'Open in Visual Studio Code'</strong>을 클릭해주세요.

![placehorder](/imgs/github5.JPG)

다음과 같은 VSCode 화면이 나오면, 사진 속 버튼을 눌러 새 파일을 추가하고, <strong>'index.html'</strong>이라고 이름 지어주세요.

참고로, index.html은 {username}.github.io에 접속했을 때 가장 먼저 로딩되는 페이지입니다.

![placehorder](/imgs/github6.JPG)

그리고 해당 파일에 아무런 텍스트나 적고 저장(Ctrl + S)을 해줍니다.

![placehorder](/imgs/github7.JPG)

그리고 다시 Github Desktop으로 돌아가보면, index.html을 생성하고, 그 파일에 내용을 추가한 기록이 나타납니다.

이제 이 변경 사항을 Commit하고 Github Repository에 Push하여 웹사이트에 반영시켜보겠습니다.

먼저, 아래 사진의 빨간색 네모 박스에 Commit Message(변경 사항을 요약하는 짧은 문장)를 적고, <strong>'Commit to main'</strong>을 클릭합니다.

![placehorder](/imgs/github8.JPG)

만약 아래와 같은 에러 메시지가 뜬다면, 사용자 등록이 제대로 되지 않은 것입니다.

![placehorder](/imgs/github9.JPG)

<details>
  <summary>에러 해결 방법</summary>

  <p>이 에러를 해결하기 위해서, 왼쪽 상단의 <strong>File -> Options...</strong>를 클릭해서 설정창에 들어갑니다.<br>
    그리고 'Git' 옵션에 들어가서, Name과 Email에 {username}과 {github_id}를 입력하고, 'Save'를 누릅니다.<br></p>
  <img src="/imgs/github10.JPG" alt="github_desktop_error_pic">
</details>
<br>
Commit이 성공적으로 되었다면, 아래와 같이 'No local changes'라는 문구가 나오게 됩니다.

여기서 'Push Origin' 버튼을 눌러, Github Repository에 변경 사항을 업로드해줍니다.

![placehorder](/imgs/github11.JPG)

업로드 이후 약 1~2분 후 웹사이트에 들어가보면, 다음과 같이 앞에서 적었던 텍스트가 출력되는 것을 확인할 수 있습니다.

![placehorder](/imgs/github12.JPG)

## 3. [Ruby](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener noreferrer"}, Jekyll 설치
이제부터 우리의 웹 사이트를 블로그답게 꾸며보는 작업을 해볼 것입니다.
이를 위해, Ruby와 Jekyll을 설치해야 하는데요.
Jekyll은 사이트를 만들어주는 소프트웨어이고, 이 소프트웨어가 Ruby라는 프로그래밍 언어로 작성되었기 때문에, 둘 다 설치해줘야 합니다.

### 3-1. [Ruby](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener noreferrer"} 설치
[Ruby 웹사이트](https://rubyinstaller.org/downloads/){:target="_blank" rel="noopener noreferrer"}에 들어가서 'Ruby+Devkit'을 다운로드 해줍니다.

저는 화살표로 추천해주고 있는 <strong>'Ruby+Devkit 3.3.7-1(x64)'</strong>로 다운받았습니다.

![placehorder](/imgs/github13.JPG)

설치 프로그램을 실행하고, <strong>'Install for me only'</strong>를 클릭해줍니다.

그리고 약관 동의, 다음, 다음...을 눌러줍니다.

![placehorder](/imgs/github14.JPG)

설치를 완료하면, 다음과 같은 명령 프롬프트 창이 나타나는데, 'Enter'를 눌러서 설치해줍니다.

![placehorder](/imgs/github15.JPG)

### 3-2. Jekyll 설치
Ruby 설치가 완료되면, Windows 버튼 오른쪽 검색창에 'ruby'를 입력해줍니다.

그러면 다음과 같이, <strong>'Start Command Prompt with Ruby'</strong>라는 앱이 나오는데, 이것을 실행해줍니다.

![placehorder](/imgs/github16.JPG)

그리고 앞서 Github Desktop을 통해 Clone해온 Local Repository로 이동해줍니다.

보통은 <strong>'C:\Users\\{pc_username}\Documents\GitHub\\{username}.github.io'</strong>에 Local Repository가 존재할 것입니다.

만일 경로가 다르다면, VSCode에서 'README.md'파일을 우클릭 후 “파일 탐색기에 표시”버튼을 누르면 나오는 폴더의 경로가 Local Repository 경로이니 확인해보시기 바랍니다.

저는 다음과 같이 Local Repository 경로로 이동했습니다.

```
C:\Users\ookk2>cd Documents\GitHub\ookk2007.github.io
```

그러면 이제부터 Jekyll을 설치해 보겠습니다.

(참고로, 아래 명령어는 Hydeout 테마에 최적화된 명령어이므로, 다른 테마를 쓰시는 분들에게는 추가로 필요한 패키지가 있을 수 있습니다.)

먼저 다음과 같은 명령어를 입력해주세요.

```shell
gem install bundler jekyll jekyll-gist jekyll-sitemap jekyll-seo-tag jekyll-paginate rouge webrick
```

설치가 완료되면, Local Repository 내의 파일들을 전부 지워주세요.

VSCode에서 'README.md'파일을 우클릭 후 “파일 탐색기에 표시”버튼을 누르면, 파일 탐색기로 쉽게 파일들을 지울 수 있습니다.

<strong>(이때, '.git' 폴더는 지우시면 안 됩니다!!)</strong>

![placehorder](/imgs/github17.JPG)

파일들을 지우고, 다시 Ruby 명령 프롬프트로 돌아와서, 다음 명령어를 입력해주세요.

```shell
jekyll new ./
```
여기까지 완료했다면, Jekyll을 성공적으로 설치한 것입니다.

### 3-3. [Hydeout](https://github.com/fongandrew/hydeout){:target="_blank" rel="noopener noreferrer"} 테마 적용
이제 Jekyll에 Hydeout 테마를 적용하여, 더 멋진 사이트를 만들어봅시다.

참고로, Hydeout 테마는 Jekyll 기본 구조를 거의 그대로 사용하고 있기 때문에, 다른 테마를 적용할 때도 본 포스팅의 내용이 도움이 될 것입니다.

<details>
  <summary>Hydeout 테마를 선택한 이유</summary>

  <p>사실 Jekyll에서 사용할 수 있는 테마는 무수히 많고, Hydeout은 그렇게 인기 있는 테마는 아닙니다.<br>
  저도 처음에는 가장 보편적인 Chirpy 테마와, 애니메이션이 풍부한 Hydejack 테마 중 고민을 했습니다.<br>
  그런데 제 기준에서 두 테마 모두 왼쪽 사이드바 디자인이 너무 평범한 것 같았습니다..<br>
  그래서 좀 더 심플하면서도 세련된 디자인을 찾다가 Hydeout에 정착하게 되었습니다.<br>
  나중에 시간이 되면 Hydejack 테마의 매끄러운 애니메이션을 일부 추가해볼 생각입니다!</p>

</details>
<br>
  디자인 취향에 정답은 없기 때문에 여러분들도 각자만의 테마를 찾아보시기 바랍니다!

  아래 링크들은 Jekyll 테마들을 모아놓은 사이트들입니다.

<a href="http://jekyllthemes.org/" target="_blank" rel="noopener noreferrer">http://jekyllthemes.org/</a>

<a href="https://jekyllthemes.io/free" target="_blank" rel="noopener noreferrer">https://jekyllthemes.io/free</a>

<a href="https://github.com/topics/jekyll-theme" target="_blank" rel="noopener noreferrer">https://github.com/topics/jekyll-theme</a>

<a href="https://jekyll-themes.com/" target="_blank" rel="noopener noreferrer">https://jekyll-themes.com/</a>

<br>
<br>

먼저, [Hydeout Github Repository](https://github.com/fongandrew/hydeout){:target="_blank" rel="noopener noreferrer"}
에 접속해서 프로젝트를 다운로드합니다.

Github 페이지에서 <strong>Code</strong> 버튼을 누르고, <strong>Download ZIP</strong> 버튼을 눌러서, ZIP 파일을 다운로드해주세요.
![placehorder](/imgs/github_hydeout.JPG)

그리고 ZIP 파일을 압축 해제하고, 그 안에 있던 파일들을 복사해서, <strong>Local Repository(이전에 .git 폴더 빼고 다 삭제한 경로)</strong>에 붙여넣어주세요.

(겹치는 파일들은 덮어쓰기를 진행해주세요.)

![placehorder](/imgs/github18.JPG)

그리고 사진 상에 선택된 <strong>about.markdown</strong> 과 <strong>index.markdown</strong>은 about.md와 index.html과 역할이 겹치기 때문에 지워주세요.

그리고 <strong>_config.yml</strong> 파일을 열어서, 다음 사항들을 수정해주세요.

* title: 왼쪽 사이드바와 웹사이트 제목에 표시될 문구.
* tagline: 웹사이트 제목에 title과 함께 표시될 문구.
* description: 왼쪽 사이드바에 title 아래에 표시될 웹사이트 설명 텍스트.
* url: 본인 웹 사이트 URL. 예시) 'https://ookk2007.github.io'
* baseurl: ''로 설정해주세요.
* author->name: 본인의 이름.
* author->url: 본인을 대표하는 사이트 URL. (저는 github 프로필 링크를 적었습니다.)
* <strong>remote_theme: fongandrew/hydeout</strong> 라는 텍스트를 추가해주세요.
* (선택사항) 메인 페이지에서 게시글의 내용이 간략히 나오기를 원한다면, <strong>excerpt_separator: \<!--more--></strong> 라는 텍스트를 추가해주세요.
* (선택사항) 왼쪽 사이드바에 웹사이트 버전을 출력하고 싶다면, <strong>version: X.X.X</strong> 라는 텍스트를 추가해주세요.(X 안에는 임의의 숫자를 넣어주세요.)

실제로 제가 수정한 내용은 다음과 같습니다.

![placehorder](/imgs/github19.JPG)

### 3-4. Jekyll 서버 실행
그렇다면, 이제 Hydeout이 적용된 Jekyll 웹 서버를 Local PC에서 실행시켜봅시다.

이 방법은 웹사이트 변경 사항을 Local PC에서 즉각적으로 확인할 수 있기 때문에, 나중에 웹사이트 수정을 할 때도 유용하게 사용할 수 있습니다.

참고로, Local PC와 Github Pages간에 환경 차이가 존재해서, 결과물에 차이가 발생할 수도 있습니다!

아무튼, 다시 Ruby 명령 프롬프트로 돌아와서 다음 명령어들을 입력해주세요.

(현재 경로가 Local Repository에 위치해 있어야 합니다!)

```shell
bundle install
bundle exec jekyll serve
```
혹시 다음과 같이 <strong>Permission denied - bind(2)</strong> 에러가 뜨고 서버가 실행되지 않는다면, 현재 컴퓨터에서 특정 프로세스가 4000번 포트(Jekyll의 기본 포트)를 사용 중이라는 의미이므로, 아래 명령어를 입력해서 4001번 포트로 서버를 실행해줍니다.

![placehorder](/imgs/github21.JPG)

```shell
bundle exec jekyll serve --port 4001
```

성공적으로 실행되면 명령 프롬프트에 다음과 같은 문구가 출력될 것입니다.

(말 그대로, 서버를 종료하고 싶을 때, Ctrl + C를 누르면 됩니다.)

```shell
Server running... press ctrl-c to stop.
```
그리고 웹 브라우저에 <strong>localhost:4000</strong>을 입력해보면, 앞에서 만든 웹 사이트가 나오는 것을 확인할 수 있습니다.

(4001번 포트로 실행했다면, localhost:4001로 접속해주세요.)

![placehorder](/imgs/github22.JPG)

## 4. Github Pages에 변경 사항 업로드(Commit, Push)
지금까지는 Local Repository의 파일들을 수정하고, Local PC에서의 실행 결과를 확인해 보았습니다.

우리가 지금껏 만든 변경 사항들을 실제 웹 사이트에도 적용시키려면, Local Repository 상의 변경 사항들을 인터넷(github)에 업로드해야 합니다.

이를 위해서는 Commit과 Push를 해야하는데, 이미 2-1 챕터에서 다룬 내용이기 때문에, 쉽게 하실 수 있을 겁니다.

Github Desktop을 확인해보면, 다음과 같이 여러가지 변경 사항들이 눈에 들어오실 것입니다.

![placehorder](/imgs/github23.JPG)

복잡하게 생각할 것 없이, 빨간색 네모 칸에 변경 사항 요약을 한 줄로 적고, <strong>'Commit to main'</strong>을 눌러주시면 됩니다.

![placehorder](/imgs/github11.JPG)

그리고 <strong>'Push origin'</strong> 버튼을 눌러 변경 사항을 업로드 해주세요.

업로드 이후 약 1~2분 후 웹사이트에 들어가보면, 웹사이트 상에서도 localhost에서 확인했던 페이지와 동일한 화면을 확인할 수 있습니다.

## 5. 마무리
오늘은 Github Pages를 만들고, Jekyll 테마를 실제 웹사이트에 적용하는 과정까지 다루어보았습니다.

코딩 입문자도 따라할 수 있도록 최대한 자세하고 빈틈 없이 설명하려고 노력했는데, 이번 포스팅이 어렵지 않으셨으면 좋겠습니다.

마지막으로 팁을 드리자면, 중간에 문제가 생겼을 때 ChatGPT나 다른 AI 서비스에게 질문해보세요.

에러 코드를 전부 복사-붙여넣기해서 질문하거나 상황을 자세히 설명하면, 생각보다 높은 정확도로 문제 해결법을 알려줍니다!

저도 이 블로그를 만들면서 겪었던 에러들을 모두 ChatGPT를 통해 해결했습니다!

그래도 잘 모르시겠다면, 댓글 남겨주셔도 됩니다!

그러면 저는 블로그를 커스터마이징하는 포스팅으로 다시 돌아오겠습니다.

감사합니다.

## 6. 참고 사이트

<a href="https://wlqmffl0102.github.io/posts/Making-Git-blogs-for-beginners-1/" target="_blank" rel="noopener noreferrer">https://wlqmffl0102.github.io/posts/Making-Git-blogs-for-beginners-1/</a>

<a href="https://hanarotg.tistory.com/216" target="_blank" rel="noopener noreferrer">https://hanarotg.tistory.com/216</a>

<a href="https://lifetutorial.tistory.com/7" target="_blank" rel="noopener noreferrer">https://lifetutorial.tistory.com/7</a>

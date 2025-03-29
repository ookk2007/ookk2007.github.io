---
layout: post
title:  "Github Pages(github.io) 만들기 (with Hydeout) - 1"
date:   2025-03-29 19:19:23 +0900
categories: tutorial
---

안녕하세요!

블로그를 만들고나서 처음으로 글을 써보고 있습니다. ㅎㅎ

그래서 이번 포스팅에서는 'Github Pages로 블로그를 만드는 방법'에 대해서 다루어보고자 합니다.

참고로, 이 블로그는 <strong>'Hydeout'</strong>이라는 테마를 기반으로 만들어졌습니다.

그래서 저는 <strong>'Hydeout'</strong> 테마를 사용해서 블로그를 만드는 방법을 소개해드리겠습니다.

다른 테마도 부분적으로는 도움이 될 수 있습니다.

그럼 시작하겠습니다!

## 0. Github Pages란?

Github Pages는 [github][github]에서 제공하는 웹 호스팅 서비스입니다.

이를 통해, 온라인 쇼핑몰, 커뮤니티, 블로그 등등 다양한 사이트를 만들 수 있으며, 많은 개발자들이 github pages로 본인의 블로그를 만듭니다.

인터넷 검색을 하다가 종종 <strong>'github.io'</strong>라는 도메인의 사이트를 볼 수 있는데, 이 사이트들이 모두 github pages를 이용해 만든 사이트입니다.

github 계정을 갖고 있는 사람이라면 누구든 이 서비스를 무료로 사용할 수 있으며, github repository에 서버 리소스들을 push할 때마다 곧바로 웹사이트에 반영이 되기 때문에, github을 사용하던 사람들에게는 참 유용한 웹 호스팅 서비스라고 할 수 있습니다.

게다가 블로그를 처음부터 끝까지 본인의 취향대로 꾸밀 수 있기 때문에, 기존 블로그 플랫폼(네이버, 티스토리 등)에서 불가능했던 기능들을 얼마든지 구현할 수 있습니다.

다만, 자유도가 높다는 것은 그만큼 사이트를 만드는 난이도가 높다는 뜻이기도 합니다.

하지만 이번 포스팅만 잘 참고하시면, 블로그를 만드는 데 전혀 어려움이 없으실 겁니다!!

## 1. Github Pages 생성

앞에서 말씀드렸다시피, Github Pages를 사용하려면, [github][github] 계정이 있어야 합니다.

[github][github] 계정이 없으신 분들은 회원가입부터 해주시길 바랍니다.

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

## 2. [Github Desktop][github-dt], [VSCode][vscode] 설치

다음으로, [Github Desktop][github-dt]과 [VSCode][vscode]를 설치해줍니다.

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

먼저, 아래 사진의 빨간색 네모 박스에 Commit Message(변경 사항을 요약하는 짧은 문장)을 적고, <strong>'Commit to main'</strong>을 클릭합니다.

![placehorder](/imgs/github8.JPG)

만약 아래와 같은 에러 메시지가 뜬다면, 사용자 등록이 제대로 되지 않은 것입니다.

![placehorder](/imgs/github9.JPG)

이 에러를 해결하기 위해서, 왼쪽 상단의 <strong>File -> Options...</strong>를 클릭해서 설정창에 들어갑니다.

그리고 'Git' 옵션에 들어가서, Name과 Email에 {username}과 {github_id}를 입력하고, 'Save'를 누릅니다.

![placehorder](/imgs/github10.JPG)

만약 에러 없이 Commit이 성공적으로 되었다면, 아래와 같이 'No local changes'라는 문구가 나오게 됩니다.

여기서 'Push Origin' 버튼을 눌러, Github Repository에 변경 사항을 업로드해줍니다.

![placehorder](/imgs/github11.JPG)

업로드 이후 약 1~2분 후 웹사이트에 들어가보면, 다음과 같이 앞에서 적었던 텍스트가 출력되는 것을 확인할 수 있습니다.

![placehorder](/imgs/github12.JPG)

## 3. [Ruby][ruby], Jekyll 설치
이제부터 우리의 웹 사이트를 블로그답게 꾸며보는 작업을 해볼 것입니다.
이를 위해, Ruby와 Jekyll을 설치해야 하는데요.
Jekyll은 사이트를 만들어주는 소프트웨어이고, 이 소프트웨어가 Ruby라는 프로그래밍 언어로 작성되었기 때문에, 둘 다 설치해줘야 합니다.

### 3-1. [Ruby][ruby] 설치
[Ruby 웹사이트][ruby]에 들어가서 'Ruby+Devkit'을 다운로드 해줍니다.

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

![placehorder](/public/imgs/github16.JPG)

그리고 앞서 Github Desktop을 통해 Clone해온 Local Repository로 이동해줍니다.

보통은 <strong>'C:\Users\\{pc_username}\Documents\GitHub\\{username}.github.io'</strong>에 Local Repository가 존재할 것입니다.

만일 경로가 다르다면, VSCode에서 'README.md'파일을 우클릭 후 “파일 탐색기에 표시”버튼을 누르면 나오는 폴더의 경로가 Local Repository 경로이니 확인해보시기 바랍니다.

저는 다음과 같이 Local Repository 경로로 이동했습니다.

```Shell
C:\Users\ookk2>cd Documents\GitHub\ookk2007.github.io
```

그러면 이제부터 Jekyll을 설치해 보겠습니다.

(참고로, 아래 명령어는 Hyde 테마에 최적화된 명령어이므로, 다른 테마를 쓰시는 분들에게는 추가로 필요한 패키지가 있을 수 있습니다.)

먼저 다음과 같은 명령어를 입력해주세요.

```Shell
gem install bundler jekyll jekyll-gist jekyll-sitemap jekyll-seo-tag jekyll-paginate rouge webrick
```

설치가 완료되면, Local Repository 내의 파일들을 전부 지워주세요.

VSCode에서 'README.md'파일을 우클릭 후 “파일 탐색기에 표시”버튼을 누르면 쉽게 파일들을 지울 수 있습니다.

<strong>(이때, '.git' 폴더는 지우시면 안 됩니다!!)</strong>

파일들을 지우고, 다시 Ruby 명령 프롬프트로 돌아와서, 다음 명령어를 입력해주세요.

```Shell
jekyll new ./
```
여기까지 완료했다면, Jekyll을 성공적으로 설치한 것입니다.

### 3-3. Hydeout 테마 적용


{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

[github]: https://github.com/
[github-dt]: https://github.com/apps/desktop
[vscode]: https://code.visualstudio.com/
[ruby]: https://rubyinstaller.org/downloads/
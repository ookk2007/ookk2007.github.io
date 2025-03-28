---
layout: post
title:  "Github Pages(github.io) 만들기 (with Hyde) - 1"
date:   2025-03-28 19:19:23 +0900
categories: tutorial
---

안녕하세요!

블로그를 만들고나서 처음으로 글을 써보고 있습니다. ㅎㅎ

그래서 이번 포스팅에서는 'Github Pages로 블로그를 만드는 방법'에 대해서 다루어보고자 합니다.

참고로, 이 블로그는 <strong>'Hyde'</strong>라는 테마를 기반으로 만들어졌습니다.

그래서 저는 <strong>'Hyde'</strong> 테마를 사용해서 블로그를 만드는 방법을 소개해드리겠습니다.

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

![placehorder](/public/imgs/github1.JPG)

그리고 사진을 참고해서 다음의 사항들을 입력해주세요.

* Repository name: {username}.github.io -> owner에 나와있는 본인의 username을 동일하게 입력해주세요.
* 'Public'에 체크해주세요.
* 'Add a README file'에 체크해주세요.

다 되셨으면, 'Create repository'를 눌러주세요.

![placehorder](/public/imgs/github2.JPG)

그러면 Repository가 하나 생성될 것입니다.

이제 위 사진을 참고해서 Github Pages를 위한 설정을 해줍시다.

1. 'Settings' 메뉴 클릭
2. 'Pages' 옵션 클릭
3. 'Build and deployment'가 위 사진과 같이 설정되어 있는지 확인합니다. 만약 다르게 되어있다면, 위 사진에 맞추어 수정해주세요.

그리고 잠시 후에 '{username}.github.io' 주소로 접속해보세요.

![placehorder](/public/imgs/github3.JPG)

다음과 같이 나오면 성공입니다.


{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

[github]: https://github.com/
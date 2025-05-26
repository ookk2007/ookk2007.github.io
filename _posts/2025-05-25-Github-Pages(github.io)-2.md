---
layout: post
title: Github Pages(github.io) 만들기 (with Hydeout) - 2
date: '2025-05-25 16:19:23 +0900'
categories: Tutorial
tags: Github Github-Pages Jekyll Hydeout
---

안녕하세요!

오랜만에 다시 찾아왔습니다 ㅎㅎ..

저번 포스팅에서는 기초적인 블로그 생성 방법에 대해서 설명드렸는데요.

이번 포스팅에서는 '커스터마이징 방법'에 대해서 다루어보고자 합니다.

<!--more-->

들어가기에 앞서, 저는 <strong>'Hydeout'</strong>이라는 테마를 기반으로 설명을 드릴 것이며, 커스터마이징 방법에 정답은 없다는 것을 알려드립니다!

또한, 본인이 추구하는 디자인이 있는데 구현하는 방법을 모르겠다면, 요새 떠오르고 있는 AI 서비스들을 이용해보시는 것을 추천드립니다.

저도 ChatGPT의 도움을 많이 받았습니다!

<br>

## 1. 사이드바 색상 변경

여기서, '사이드바'는 아래 사진 상 왼쪽의 검은색 배경 부분을 의미합니다.

이 영역에는 블로그 이름, 블로그 설명, 메뉴, 아이콘 등이 표시됩니다.

![placehorder](/imgs/github22.JPG)

저는 먼저 이 사이드바의 색상부터 변경해보겠습니다.

관련 코드는 <strong>_sass/hydeout/_layout.scss</strong>에 존재합니다.

![placehorder](/imgs/bg_color.jpg)

중간에 body 선택자 내에 <strong>"background-image"</strong>를 설정하는 코드가 있습니다.

코드를 살펴보면, $sidebar-bg-color라는 색상을 기준으로 그라데이션을 적용시키는 것을 볼 수 있는데요.

저는 그라데이션이 오히려 촌스러운 것 같아서, 미니멀하게 단색으로 꾸며보기로 하였습니다.

그래서 background-image 코드를 주석 처리하고, <strong>background-color: $sidebar-bg-color;</strong> 코드를 추가해 주었습니다.

그리고, $sidebar-bg-color의 색상 값을 수정하기 위해, <strong>_sass/hydeout/_variables.scss</strong>로 이동했습니다.

![placehorder](/imgs/bg_color2.jpg)

![placehorder](/imgs/bg_color3.jpg)

코드를 살펴보면, $sidebar-bg-color가 초기에는 회색(#202020)으로 되어 있을텐데, 이 부분을 자신이 원하는 색상으로 변경하면 됩니다.

저는 진한 올리브색으로 만들고 싶어서 $green의 색상 값을 #435224로 수정해주고, $sidebar-bg-color의 값을 $green으로 설정해 주었습니다.

VSCode에서 색상 코드 왼쪽의 네모 칸을 누르면 직접 색상을 수정해볼 수 있으니 참고하시길 바랍니다.

추가로, 변수명들을 보면 아시겠지만, 여기서 사이드바 배경 색상 뿐만 아니라, 사이드바 텍스트 색상, 사이드바 위치 반전(오른쪽으로) 등을 설정할 수 있으니 참고하시길 바랍니다. (저는 아마 그대로 두었던 것 같습니다.)

<br>

## 2. 사이트 폰트 변경

블로그의 기본 폰트, 사이드바에 크게 표시되는 블로그 이름 폰트를 바꿔보도록 하겠습니다.

먼저, [Google Fonts](https://fonts.google.com/){:target="_blank" rel="noopener noreferrer"} 사이트에 접속해주세요.

그리고 본인이 원하는 폰트를 클릭하고 "Get Font" 버튼을 클릭해줍니다.
(여러 개 선택하셔도 됩니다!)

저는 기본 폰트로 42dot Sans를 선택했고, 블로그 이름용 폰트로 Playfair Display 폰트를 선택했습니다.

![placehorder](/imgs/github25.JPG)

선택을 완료했다면 오른쪽 위의 쇼핑백(?) 버튼을 누르고, 본인이 선택한 폰트들을 확인 후, "Get embed code" 버튼을 눌러주세요.

![placehorder](/imgs/github26.JPG)

그리고 첫번째 코드 블럭 내의 코드를 복사해주세요.

제 경우에는 마지막 줄 코드만 있어도 폰트 사용이 가능해서, 마지막 줄만 복사했습니다!

복사한 코드를 <strong>_includes/font-includes.html</strong>에 붙여넣어 주세요.

![placehorder](/imgs/github27.JPG)

이를 통해, 웹페이지가 로드될 때 해당 폰트들이 같이 로드될 수 있도록 만들어주었습니다.

그렇다면, 이제 로드된 폰트를 적용시켜 보겠습니다.

먼저, 기본 폰트는 <strong>_sass/hydeout/_variables.scss</strong>의 $root-font-family를 수정하면 됩니다.

$root-font-family에 여러 폰트들이 나열되어 있는데, 앞선 폰트를 사용할 수 없을 때 뒤에 나열된 폰트를 사용하는 방식입니다.

따라서, 가장 기본적으로 적용될 폰트를 맨 앞에 넣어주면 됩니다.

저는 Google Fonts에서 받아온 '42dot Sans'를 맨 앞에 추가해 주었습니다.

![placehorder](/imgs/github28.JPG)

그리고 블로그 이름용 폰트는 <strong>_sass/hydeout/_layout.scss</strong>에서 #sidebar 내의 .site-title 부분에 다음과 같은 코드를 추가해주는 식으로 수정해주었습니다.

이 코드를 통해서 폰트, 글자 크기, 글자 두께, 글자 스타일을 설정할 수 있습니다.

![placehorder](/imgs/github29.JPG)

<br>

## 3. 사이드바 메뉴 변경

현재 사이드바의 기본적인 메뉴는 'Home', 'About', 'Edge Case', 'Markup'으로 이루어져 있습니다.

이에 대한 코드는 <strong>_includes/sidebar-nav-links.html</strong>에서 확인해볼 수 있는데요.

![placehorder](/imgs/github30.JPG)

코드를 보면 크게 다섯 부분으로 이루어져 있습니다.

1. site.sidebar_home_link == true라면 'Home' 메뉴 추가
2. site.sidebar_blog_link == true라면 'Blog' 메뉴 추가
3. page-links.html: 페이지(.html, .md, ...) 중 상단에 "sidebar_link: true"가 존재하는 페이지를 메뉴로 추가
4. category-links.html: 페이지(.html, .md, ...) 중 "layout: category"인 페이지를 메뉴로 추가
5. custom-nav-links.html: 사용자 설정 메뉴 추가

현재는 1, 4번에 해당하는 코드에 의해 <strong>'Home', 'About', 'Edge Case', 'Markup'</strong>라는 메뉴가 표시된 것입니다.

저는 이 메뉴들을 개편해서, <strong>'Home', 'About', 'Categories', 'Tags'</strong>로 변경해보겠습니다.

### 3-1. 기존 메뉴 제거

먼저, 기존 메뉴인 'Edge Case', 'Markup'은 'category' 폴더 내에 'edge-case.md', 'markup.md' 파일로 존재합니다.

이 두 메뉴를 지우기 위해, 해당 파일들을 지우는 방법도 되고, 아예 <strong>_includes/sidebar-nav-links.html</strong>에서 '{% raw %}{% include category-links.html %}{% endraw %}'를 지우는 방법이 있는데요.

저는 카테고리들이 전부 메뉴에 표시되는 형태가 아니라, 'Categories' 메뉴에서 카테고리들을 한번에 확인하는 형태로 구현할 것이기 때문에, 후자의 방법을 선택하였습니다.

### 3-2. 'Categories' 메뉴 추가

가장 상위 폴더에 'categories.html'을 만들어서, 다음 코드를 넣어주었습니다.

```html
{% raw %}
---
layout: page
permalink: /categories/
title: Categories
sidebar_link: true
---

<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% assign category_name = category | first %}
    {% assign category_slug = category_name | downcase | replace: " ", "-" %}
    <div id="#{{ category_slug }}"></div>

    <h2 class="category-head">
        <a href="{{ site.baseurl }}/category/{{ category_slug }}">{{ category_name }}</a>
    </h2>
    <a name="{{ category_slug }}"></a>
    {% assign posts = site.categories[category_name] | sort: "date" | reverse | slice: 0, 5 %}
    <ul class="posts-list">
        {% for post in posts %}
          <li>
            <h4>
              <a href="{{ site.baseurl }}{{ post.url }}">
                {{ post.title }}
                <small>[{{ post.date | date_to_string }}]</small>
              </a>
            </h4>
          </li>
        {% endfor %}
    </ul>
    <hr>
  </div>
{% endfor %}
</div>
{% endraw %}
```

이 코드는 카테고리별로 최근 5개의 게시글을 리스트로 보여주는 기능의 코드입니다.

코드 상단(Front-matter)에 "sidebar_link: true"라고 명시했기 때문에, 'Categories'라는 메뉴가 사이드바에 나타나게 됩니다.

이 페이지의 랜더링 결과는 다음과 같이 나타나게 됩니다.

![placehorder](/imgs/github31.JPG)

참고로, 이 코드에서 인식하는 '카테고리'는 게시글의 상단(Front-matter)에 입력한 'categories'에 의해 결정됩니다.

현재 게시글은 'categories: Tutorial'으로 작성했기 때문에 'Tutorial' 카테고리에 위치한 것입니다.

### 3-3. 'Tags' 메뉴 추가

다음으로, 'Tags' 메뉴는 Hydeout에 기본적으로 탑재된 'tags.html'을 사용할 것입니다.

그래서 제가 해줄 것은 'tags.html'에 "sidebar_link: true"로 설정해주는 것 뿐입니다.

<br>

## 4. 사이드바 아이콘 변경

사이드바 메뉴 아래에는 작은 아이콘들이 위치해 있습니다.

기존 아이콘은 <strong>Github, 다운로드, RSS, 태그, 검색</strong> 아이콘이었는데요.

저는 이 아이콘을 <strong>Github, Youtube, 검색</strong> 아이콘으로 기능을 바꾸어 보겠습니다.

이 과정은 생각보다 간단합니다.

### 4-1. 아이콘 변경

먼저, <strong>_includes/sidebar-icon-links.html</strong> 내의 코드를 다음과 같이 바꿔 줍니다.

이때, _includes/svg/ 내에 github.svg와 search.svg는 기본적으로 들어있지만 youtube.svg는 존재하지 않습니다.

그래서 저는 인터넷에서 유튜브 로고 svg 파일을 다운받고, 'Inkscape'라는 프로그램으로 크기 조절을 해서 _includes/svg/에 추가해 주었습니다.

![placehorder](/imgs/github32.JPG)

그리고 코드 내의 site.author.github, site.author.youtube는 <strong>config.yml</strong>에 작성해 주었습니다.

![placehorder](/imgs/github33.JPG)

이로써, Github 아이콘과 Youtube 아이콘은 제가 의도한 대로, 클릭 시 각각의 페이지로 연결될 것입니다.

### 4-2. 검색 기능 업그레이드

기존 검색 기능은 단순히 search.html로 이동해서, 구글 검색을 하게 해주는 아주 쓸모없는(?) 기능이었는데요.

저는 검색 아이콘을 누르면, 숨어있던 검색창이 위에서 내려오고, 블로그 내 게시글을 검색해주는 기능으로 바꿔보겠습니다.

다만 이 과정이 조금 복잡하니, 최대한 간단하게 설명하고 넘어가 보겠습니다!

1. _includes/ 내의 'search-form.html'를 삭제하고, 'search.html' 파일을 생성하여 다음과 같이 코드 작성(검색창을 구현한 코드)

    ```html
    <!-- 검색 바를 감싸는 오버레이 요소 추가 -->
    <div id="search-overlay" class="search-overlay">
    <div class="search-container">
        <input type="text" id="search-input" placeholder="Search posts..." />
        <ul id="search-results"></ul>
    </div>
    </div>

    <!-- 검색 스크립트 추가 -->
    <script src="/assets/js/search.js"></script>
    ```

2. _layouts/ 내의 'search.html'를 삭제하고, 'default.html' 내에 '{% raw %}{% include search.html %}{% endraw %}' 추가(여기서 search.html은 앞에서 만든 파일입니다.)
이를 통해, search.html의 내용이 모든 페이지에 삽입되게 됩니다.
![placehorder](/imgs/github34.JPG)

3. _sass/hydeout/_layout.scss 내의 .container 선택자 내에 다음 코드를 추가합니다.

    ```
    .container {
        ...

        #search-overlay {
          width: calc(100% - 18rem);  // 사이드바 너비를 제외한 나머지 너비
          max-width: none;  // max-width를 해제
        }

        ...
    }
    ```

4. _sass/hydeout/_search.scss 코드를 다음과 같이 수정합니다.

    ```
    /* 검색 오버레이 배경과 애니메이션 */
    .search-overlay {
      display: none;  /* 처음에는 숨겨놓음 */
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);  /* 반투명 배경 */
      z-index: 9999;
      justify-content: center;
      align-items: baseline;
      opacity: 0;
      transition: opacity 0.3s ease;  /* 애니메이션 */
    }

    .search-overlay.active {
      display: flex;
      opacity: 1;
    }

    .search-container {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      width: 100%;
      animation: slideIn 0.5s ease-out;  /* 검색 바가 위에서 내려오는 애니메이션 */

      input[type=text] {
        width:100%;
      }
    }

    /* 애니메이션: 검색 바가 화면 위에서 내려오는 효과 */
    @keyframes slideIn {
      from {
        transform: translateY(-100%);  /* 위에서 내려옴 */
      }
      to {
        transform: translateY(0);  /* 원래 위치 */
      }
    }
    ```

5. assets/ 내에 js 폴더를 만들고, assets/js/ 내에 'search.js'를 만듭니다. 그리고 다음 코드를 작성해줍니다.

    ```javascript
    async function searchPosts() {
        const query = document.getElementById("search-input").value.trim().toLowerCase();
        const resultsContainer = document.getElementById("search-results");

        if (!query) {
            resultsContainer.innerHTML = "";
            return;
        }

        try {
            // search.json 불러오기
            const response = await fetch("/search.json");
            const posts = await response.json();

            resultsContainer.innerHTML = "";

            // 검색어 포함 여부 확인
            const filteredPosts = posts.filter(post => 
                post.title.toLowerCase().includes(query) || 
                post.content.toLowerCase().includes(query)
            );

            if (filteredPosts.length === 0) {
                resultsContainer.innerHTML = "<li>No results found</li>";
            } else {
                filteredPosts.forEach(post => {
                    const postElement = document.createElement("li");
                    postElement.innerHTML = `<a href="${post.url}">${post.title}</a>`;
                    resultsContainer.appendChild(postElement);
                });
            }
        } catch (error) {
            console.error("Error fetching search.json:", error);
        }
    }

    // 검색 이벤트 리스너 추가
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("search-input").addEventListener("input", searchPosts);
    });


    document.addEventListener("DOMContentLoaded", function() {
        const searchButton = document.getElementById("search-button");  // 검색 버튼 ID (HTML에 추가 필요)
        const searchOverlay = document.getElementById("search-overlay");  // 검색 오버레이
        const searchInput = document.getElementById("search-input");  // 검색 입력창
        const body = document.getElementById("body"); //웹사이트 전체

        let isClick_searchOverlay = false; //클릭 시작과 끝이 모두 검색 바 외부에서 였는지 체크
        let isClick_body = false;

        // 검색 버튼 클릭 시 검색 바 표시
        searchButton.addEventListener("click", function() {
          searchOverlay.classList.add("active");
          searchInput.focus();  // 검색 바가 열리면 입력창에 포커스
        });
    
        // 검색 바 외부 클릭 시 검색 바 닫기
        searchOverlay.addEventListener("mousedown", function(event) {
            isClick_searchOverlay = (event.target === searchOverlay);
        });

        body.addEventListener("mousedown", function(event) {
            isClick_body = (event.target === body);
        });

        searchOverlay.addEventListener("mouseup", function(event) {
          if ((isClick_searchOverlay || isClick_body ) && event.target === searchOverlay) {
            searchOverlay.classList.remove("active");
          }
        });

        body.addEventListener("mouseup", function(event) {
            if ((isClick_searchOverlay || isClick_body ) && event.target === body) {
              searchOverlay.classList.remove("active");
            }
          });
      });
    
    ```

6. 가장 상위 폴더의 'search.html'을 삭제하고, 'search.json'을 생성합니다. 그리고 다음 코드를 작성해줍니다. (해당 코드는 검색에 사용될 게시글 정보를 전부 불러오는 코드입니다.)

    ```
    {% raw %}
    ---
    layout: null
    ---
    [
      {% for post in site.posts %}
        {
          "title": "{{ post.title | escape }}",
          "url": "{{ post.url | relative_url }}",
          "content": "{{ post.content | strip_html | strip_newlines | truncate: 200 | replace: '"', '\"'}}"
        }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
    {% endraw %}
    ```

이 과정을 통해, 블로그 내 게시글을 검색하는 검색창을 구현하였습니다.

설명을 최소화했으니, 궁금한 점이 있으시면 댓글 남겨주세요!

<br>

## 5. 블로그 설명글에 하이퍼링크 넣기

저는 사이드바에 표시되는 블로그 설명글을 <strong>'An archive of my learning, dev logs, and tutorials.'</strong>라고 작성했는데요.

이 때, <strong>'learning', 'dev logs', 'tutorials'</strong>가 카테고리이기도 해서, 이 글자를 누르면 각각의 카테고리 페이지로 이동하면 좋겠다고 생각했습니다.

그래서 category/ 내에 'learning.md', 'dev-log.md', 'tutorial.md' 파일을 만들어서 각각의 카테고리 페이지를 만들어 주었습니다.

그리고 <strong>_config.yml</strong> 내의 description(블로그 설명글)을 다음과 같이 수정했습니다.
```yml
description:      'An archive of my <a href="/category/learning">learning</a>, <a href="/category/dev-log">dev logs</a>, and <a href="/category/tutorial">tutorials</a>.'
```

<br>

## 6. 블로그 아이콘(favicon) 바꾸기

favicon은 웹 브라우저 탭, 북마크 등등에 웹사이트 이름과 함께 표시되는 작은 아이콘을 의미합니다.

아래 사진 속 동그라미 친 아이콘이 favicon의 예시입니다.

![placehorder](/imgs/github35.JPG)

Hydeout의 기본 favicon은 사진에서 나온대로 H 모양의 아이콘인데요.

저는 '아카이브'를 컨셉으로 블로그를 제작하였으니, 이와 관련된 서류함 아이콘을 favicon으로 만들기로 했습니다.

아이콘을 구하는 방법이나 favicon(.ico 파일)을 만드는 방법은 구글 검색을 통해 쉽게 찾을 수 있으니 설명은 생략하겠습니다.

아이콘 사진 파일과 .ico 파일을 준비했다면, 이 파일들의 이름을 전부 'favicon'으로 바꿔서 가장 상위 폴더에 붙여넣기해주세요.

그러면, 기존 H 모양의 아이콘에서 새로운 아이콘으로 덮어쓰여질 것 입니다.

마지막으로, 아이콘 사진 파일의 픽셀 사이즈를 확인해주세요.

<strong>만약 144x144px이 아니라면, _includes/favicons.html</strong>에서 사이즈를 수정해주세요.

저는 512x512px 크기의 아이콘이여서 다음과 같이 수정했습니다.

```js
old: <link rel="apple-touch-icon-precomposed" sizes="144x144" href="{{ '/favicon.png' | relative_url }}" />
new: <link rel="apple-touch-icon-precomposed" sizes="512x512" href="{{ '/favicon.png' | relative_url }}" />
```

<br>

## 7. 기타 커스터마이징 팁

여기까지, 제가 이 블로그에 적용한 커스터마이징 요소들을 설명드렸습니다.

참고로, 앞에서 굳이 말씀드리진 않았지만, 수정한 사항들은 Github에 Commit하고 Push해야 실제 웹사이트에 적용됩니다.

그리고 Commit과 Push된 결과가 웹사이트에 적용되기까지는 대략 1~2분의 시간이 소요되기 때문에, 테스트용으로 변경점을 확인해보고 싶으면 매번 Commit & Push를 하기 보다는, 다음 명령어를 통해서 로컬 환경에서 Jekyll 서버를 실행시키는 것을 추천드립니다.(자세한 내용은 <a href="/tutorial/2025/03/29/Github-Pages(github.io)-1.html">'Github Pages 만들기 1편'</a>을 참고해주세요.)
```
bundle exec jekyll serve
```

<br>

제가 소개해드린 요소 이외에도, 커스터마이징할 수 있는 요소는 무수히 많이 존재하고, 그렇기에 각자 원하는 커스터마이징 요소들이 전부 다를 수 있는데요.

그래서 마지막으로, 제 글에서 나오지 않은 요소를 수정하고 싶을 때 유용한 팁을 알려드리겠습니다.

먼저, 로컬 환경에서 Jekyll 서버를 실행하여 localhost로 블로그 사이트에 접속해주세요.

그리고 본인이 커스터마이징하고 싶은 요소가 있는 페이지로 이동합니다.

![placehorder](/imgs/github36.JPG)

저는 예를 들어, 메인 페이지에서 게시글의 카테고리(Tutorial)를 나타내는 색상을 빨간색으로 수정하고 싶다고 해보겠습니다.

그렇다면, 여기서 <strong>F12</strong>를 눌러서 '개발자 도구'를 열어주세요.

![placehorder](/imgs/github37.JPG)

그리고 왼쪽 위의 버튼을 눌러서, 화면 상의 원하는 요소를 클릭해주세요.

![placehorder](/imgs/github38.JPG)

그러면 개발자 도구 아래 부분에, 해당 요소에 적용된 스타일들이 전부 나오게 됩니다.

![placehorder](/imgs/github39.JPG)

적용된 스타일 중 'a 선택자'에 파란색 컬러를 적용하는 부분을 확인할 수 있습니다.

(참고로 a는 다른 페이지로 이동할 수 있는 하이퍼링크를 만들 때 사용하는 태그입니다.)

그리고 오른쪽 네모 박스를 보면, 이러한 스타일이 작성된 코드가 '_base.scss' 파일의 46번 라인에 위치함을 알 수 있습니다.

![placehorder](/imgs/github40.JPG)

실제로 '_sass/hydeout/_base.scss'의 46번 라인을 찾아본 결과, a 선택자에 대한 스타일이 작성되어 있었고, 그 색상은 $link-color에 담겨있는 것을 확인할 수 있었습니다.

VSCode에서 프로젝트 파일 중 '$link-color'에 대한 코드를 찾아보려면, 상단의 검색 창에서 '%'와 함께 원하는 문자열을 입력해보면 됩니다.

![placehorder](/imgs/github41.JPG)

검색 결과, '_variables.scss'에서 $link-color를 $blue로 지정하는 코드를 발견할 수 있습니다.

해당 검색 결과를 클릭해서, 그 코드로 이동해 보겠습니다.

![placehorder](/imgs/github42.JPG)

이 코드에서 $blue를 $red로 수정하여, 하이퍼링크(a 태그)가 빨간색 글씨로 나타나도록 커스터마이징 해보겠습니다.

$red로 수정하고 저장한 후, 로컬 환경의 기존 웹 사이트를 새로고침해보면, 다음과 같이 하이퍼링크 글씨가 빨간색으로 나오는 것을 확인할 수 있습니다.

![placehorder](/imgs/github43.JPG)

이런 방식으로 개발자 도구(F12)의 기능과 VSCode 내 검색 기능을 활용하면, 손쉽게 원하는 요소의 스타일을 변경할 수 있으실 겁니다!

또한, 커스터마이징 방법을 ChatGPT에게 물어보거나, Cursor나 Windsurf 같은 AI 코드 편집기를 활용하면 더 손쉽게 커스터마이징을 해낼 수 있으실 겁니다!

(요새 AI의 발전이 개발의 패러다임을 바꾸고 있다는 게 확 체감됩니다..)

<br>

## 8. 마무리

오늘은 이렇게 Hydeout 기본 테마에서 커스터마이징 하는 방법에 대해서 소개해 드렸습니다.

커스터마이징까지 하고 나니, 이제야 나만의 블로그를 만든 것 같은 느낌이 드는데요.

하지만 아직 갈 길이 많이 남아있습니다..!

다음 시간에는 블로그 게시글을 작성하는 방법에 대해서 소개해드리겠습니다.

다음 글에서 만나요~ 안녕~~

<br>

## 9. 참고 사이트

<a href="https://yangxiaozhou.github.io/learning/2019/09/25/set-up-blog.html" target="_blank" rel="noopener noreferrer">https://yangxiaozhou.github.io/learning/
2019/09/25/set-up-blog.html</a>

<br>
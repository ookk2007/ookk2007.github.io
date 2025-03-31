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
  
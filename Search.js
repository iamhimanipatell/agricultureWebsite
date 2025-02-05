document.addEventListener("DOMContentLoaded", () => {
    // Create search elements
    const searchContainer = document.createElement("div")
    searchContainer.id = "search-container"
    searchContainer.style.textAlign = "center"
    searchContainer.style.margin = "20px 0"
  
    const searchInput = document.createElement("input")
    searchInput.type = "text"
    searchInput.id = "search-input"
    searchInput.placeholder = "Search..."
    searchInput.style.padding = "10px"
    searchInput.style.width = "300px"
  
    const searchButton = document.createElement("button")
    searchButton.id = "search-button"
    searchButton.textContent = "Search"
    searchButton.style.padding = "10px 20px"
    searchButton.style.backgroundColor = "#1c5b70"
    searchButton.style.color = "white"
    searchButton.style.border = "none"
    searchButton.style.cursor = "pointer"
    searchButton.style.marginLeft = "10px"
  
    searchContainer.appendChild(searchInput)
    searchContainer.appendChild(searchButton)
  
    // Insert search container after the nav
    const nav = document.querySelector("#seedsnav") || document.querySelector(".navbar")
    if (nav) {
      nav.parentNode.insertBefore(searchContainer, nav.nextSibling)
    } else {
      document.body.insertBefore(searchContainer, document.body.firstChild)
    }
  
    // Search functionality
    function performSearch() {
      const searchTerm = searchInput.value.toLowerCase().trim()
      const containers = document.querySelectorAll(".container, .nav")
      let resultsFound = false
  
      containers.forEach((container) => {
        const items = container.children
        Array.from(items).forEach((item) => {
          const text = item.textContent.toLowerCase()
          if (text.includes(searchTerm)) {
            item.style.display = ""
            resultsFound = true
          } else {
            item.style.display = "none"
          }
        })
      })
  
      // Show "No results found" message
      let noResultsMsg = document.getElementById("no-results-msg")
      if (!resultsFound) {
        if (!noResultsMsg) {
          noResultsMsg = document.createElement("p")
          noResultsMsg.id = "no-results-msg"
          noResultsMsg.style.textAlign = "center"
          noResultsMsg.style.color = "red"
          searchContainer.parentNode.insertBefore(noResultsMsg, searchContainer.nextSibling)
        }
        noResultsMsg.textContent = "No results found"
      } else if (noResultsMsg) {
        noResultsMsg.remove()
      }
    }
  
    searchButton.addEventListener("click", performSearch)
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        performSearch()
      }
    })
  })
  
  
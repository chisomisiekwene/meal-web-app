let searchInput = document.getElementById("search-input")
let searchButton = document.getElementById("search-btn")
let summary = document.getElementById("summary")




searchButton.addEventListener("click", function(e) {
    e.preventDefault()
    let summaryHtml = ""
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    .then(res=>res.json())
    .then(data=> { 
        if(data == ''){
            summaryHtml = `
                <div class="container">
                    <p>Cant be found</p>
                </div>
            `

        }else{
            data.meals.map(
                (meal) => {
                    console.log(data)
                    summaryHtml += `
                    <div class="container">
                        <img src="${meal.strMealThumb}" class="meal-image">
                        <a href = "${meal.strYoutube}"><img class="youtube-icon" src="youtube-icon.png"/></a>
                        <span class="location">${meal.strArea}</span>
                        <p class="meal-title">${meal.strMeal}</p>
                    </div>
                `
                summary.innerHTML = summaryHtml
                }
            )

        }
        
        })
        
        
        
    })

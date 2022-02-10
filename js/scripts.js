
// Insert the date of the most recent Sunday
$('#weekDate').append(function() {
  d = new Date();
  d.setDate(d.getDate() - d.getDay());
  return ("Week of " + d.toLocaleDateString('en-us', {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  }).toString())
});

// Create recipe object used to populate page
// TO DO: read in recipes from databse
var groceryArray = {
  recipe1: {
  	name: "Sweet Potato Tots",
    link: "https://thebigmansworld.com/healthy-3-ingredient-baked-sweet-potato-zucchini-tots-paleo-vegan-gluten-free/",
    img: "https://thebigmansworld.com/wp-content/uploads/2020/08/sweet-potato-tots2.jpg",
		ingredients: [
        "2 medium sweet potatoes",
        "2 large zucchini",
        "Salt",
        "Pepper",
        "1/2 cup almond flour"
      ]
   },
  recipe2:{
  		name: "Balsamic Chicken and Mushrooms",
      img: "https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/static/optimized/rev-d3cf1d5/sites/default/files/styles/body_images_xs_2x/public/media/balsamic-chicken-mushrooms-3.jpg",
      link: "https://www.slenderkitchen.com/recipe/balsamic-chicken-with-mushrooms-and-thyme",
      ingredients: [
        	"1.33 lbs boneless skinless chicken breasts",
          "2 tbs olive oil",
          "8oz mushrooms",
          "2 garlic cloves",
          "1/2 cup low sodium chicken broth",
          "2.5 tbs balsamic vinegar",
          "1/2 tsp thyme",
          "Salt",
          "Pepper",
          "1 tbs parsley"
        ]
     },
  recipe3:{
	  name: "Broccoli Salad",
    img: "https://pinchofyum.com/wp-content/uploads/Broccoli-Salad-3.jpg",
    link: "https://pinchofyum.com/clean-broccoli-salad",
    ingredients:[
          	"2 heads broccoli",
            "2 cups purple cabbage",
            "1/2 cup golden raisins",
            "1/2 cup slivered almonds",
            "1/2 cup chopped green onions",
            "2/3 cup Simply Orange Low Acid [SUBSTITUTE]",
            "2 tbs miso [OMIT]",
            "2 tbs almond butter",
            "1 shallot",
            "2 tbs canola oil [SUBSTITUTE]"
          ]
			}
   };

// Add grocery list information
// TO DO: more efficient way to string these together?
var nameRow = `<tr>
                  <th class=recipe-header>
                    ${groceryArray["recipe1"].name}
                  </th>
                  <th class=recipe-header>
                    ${groceryArray["recipe2"].name}
                  </th>
                  <th class=recipe-header>
                    ${groceryArray["recipe3"].name}
                  </th>
                </tr>
                <div></div>`;
var imgRow = `<tr>
                <td id=recipe1><img class=recipe-img src=${groceryArray["recipe1"].img}></td>
                <td id=recipe2><img class=recipe-img src=${groceryArray["recipe2"].img}></td>
                <td id=recipe3><img class=recipe-img src=${groceryArray["recipe3"].img}></td>
              </tr>`;
var buttonRow = `<tr>
                  <td>
                    <p id=recipe1-status class=grocery-status>Not yet in grocery list</p>
                    <div></div>
                    <button class=footer-button>
                    <a class=footer-link target=_blank href=${groceryArray["recipe1"].link}>
                    View full recipe</a>
                    <button id=recipe1 class=recipe-button>Add to grocery list</a>
                  </td>
                  <td>
                    <p id=recipe2-status class=grocery-status>Not yet in grocery list</p>
                    <div></div>
                    <button class=footer-button>
                    <a class=footer-link target=_blank href=${groceryArray["recipe2"].link}>
                    View full recipe</a>
                    <button id=recipe2 class=recipe-button>Add to grocery list</a>
                  </td>
                  <td>
                    <p id=recipe3-status class=grocery-status>Not yet in grocery list</p>
                    <div></div>
                    <button class=footer-button>
                    <a class=footer-link target=_blank href=${groceryArray["recipe3"].link}>
                    View full recipe</a>
                    <button id=recipe3 class=recipe-button>Add to grocery list</a>
                  </td>`
$("#recipe-table").append(nameRow);
$("#recipe-table").append(buttonRow);
$("#recipe-table").append(imgRow);

// Add to grocery list on click
var addedRecipes = {};
$('.recipe-button').on('click', function() {
  var recipeName = groceryArray[this.id].name;
  if (addedRecipes[recipeName]) {
    return;
  }
	//$('.grocery-list').append('<div class=></div>');
  $('.grocery-list').append(`<span><b>${recipeName}</b></span>`);
  $('.grocery-list').append('<ul class="grocery-list-item">');
  // TO DO: Add header bullet with recipe name and make each ingredient a sub-bullet
  var text = groceryArray[this.id].ingredients;
  $.each(text, function(index, value){
  	$('.grocery-list').append("<li>"+value+"</li>");
  });
  $('.grocery-list').append("</ul>");
  $('.grocery-list').append('<div class="list-space"></div>')
  $('.grocery-list').show();
  // TO DO: stop item from being appended more than once
  addedRecipes[recipeName] = true;
  var statusId = "#" + this.id + "-status";
  $(statusId).html("Added to grocery list");
  $(".grocery-list-button").show();
})


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
      img: "https://nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/static/optimized/rev-3ea912f/sites/default/files/styles/body_images_sm_2x/public/media/balsamic-chicken-mushrooms-2.jpg",
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
var recipeArray = ["#recipe1","#recipe2","#recipe3"];

// Populate each recipe box (1-3) with data from groceryArray
$.each(recipeArray, function(index,value){
  var recipeImg = groceryArray[$(value).attr('id')].img;
  var recipeLink = groceryArray[$(value).attr('id')].link;
  var recipeName = groceryArray[$(value).attr('id')].name;
	$(value).append(`<img class='recipe-img' src=${recipeImg}><br><a class='recipe-link' href=${recipeLink} target=_blank>${recipeName}</a>`)
});
$('.recipe-boxes').on('click', function() {
	$('.groceryArray').append("<div></div>")
  $('.groceryArray').append("<ul>")
  // TO DO: Add header bullet with recipe name and make each ingredient a sub-bullet
  var text = groceryArray[$(this).attr('id')].ingredients;
  $.each(text, function(index, value){
  	$('.groceryArray').append("<li>"+value+"</li>")
  });
  $('.groceryArray').append("</ul>")
  $('.groceryArray').show();
  // TO DO: stop item from being appended more than once
})

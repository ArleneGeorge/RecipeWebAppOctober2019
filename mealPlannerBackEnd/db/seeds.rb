# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Meal.destroy_all
# Weekday.destroy_all

# breakfast = Meal.create(name: "Breakfast")
# Meal.create(name: "Morning Snack")
# Meal.create(name: "Lunch")
# Meal.create(name: "Afternoon Snack")
# Meal.create(name: "Dinner")
# Meal.create(name: "Dessert")

# sunday = Weekday.create(day: "Sunday")
# Weekday.create(day: "Monday")
# Weekday.create(day: "Tuesday")
# Weekday.create(day: "Wednesday")
# Weekday.create(day: "Thursday")
# Weekday.create(day: "Friday")
# Weekday.create(day: "Saturday")

Recipe.create(name: "Great Aunt Sandy's Angel Food Cake", image_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a05_angel_food_cake.jpg.rend.hgtvcom.826.620.suffix/1486405921560.jpeg", ingredients: "1.5 cups egg white, 1 tsp vanilla or Almond Extract, 1 cup Cake Flour, 1.5 tsp Cream of Tartar, 1 cup Sugar, 1 cup Powdered Sugar", instructions: "Preheat oven to 365 degrees F, Whip first three ingredients until forms peak, Add Sugar 1/4 cup at a time, Whip until stiff peaks form, Sift 5th and 6th ingredient together then fold into egg whites, Bake for 19 minutes, Lower oven temperature to 350 degrees F, Invert on a glass to cool")
Recipe.create(name: "Green Beans with Bacon and Shallots", image_url: "http://assets.kraftfoods.com/recipe_images/opendeploy/125638_640x428.jpg", ingredients: "2 lbs whole green beans, 8 slices bacon cooked and crumbled, 3 Tbs butter, 2/3 cup shallots", instructions: "Cook beans, Cook shallots in 3 Tbs bacon fat and 3 Tbs butter, Add beans and bacon, Heat then serve")
Recipe.create(name: "Grandma McCracken's Cheeseburger Soup", image_url: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Cheeseburger-Soup_EXPS_SBZ17_2832_B10_21_1b.jpg", ingredients: "1/2 lb ground beef,  3/4 Cup shredded carrots, 1 tsp dried basil, 4 Tbs butter or margarine (divided), 4 Cup diced peed potatoes, 8 oz Process American cheese cubed(2cup), 3/4 tsp salt, 1/4 c sour cream, 3/4 c chopped onion, 3/4 c diced celery, 1 tsp parsley flakes, 3 c chicken broth, 1/4 c all-purpose flour, 1 1/2 c milk, 1/4 to 1/2 tsp pepper ", instructions: "In a 3 quart saucepan brown beef, Drain and set aside, In the same saucepan Saute the onions carrots celery basil and parsley in 1 tbs butter until vegetables are tender(about 10 minutes), Add broth potatoes and beef, Bring to a boil and reduce heat, cover and simmer for 10-12 minutes or until potatoes are tender, Meanwhile in a small skillet melt remaining butter (3tbs) add flour and stir for 3-5 minutes or until bubbly, Add butter and flour mixture to soup and bring to a boil, Cook and stir for 2 minutes, Reduce heat to low and add cheese milk salt and pepper, Cook and stir until cheese melts, Remove from the heat and blend in sour cream")
# Menu.create(weekday_id: 1, meal_id: 1, recipe_id: 1)
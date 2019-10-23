# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Meal.destroy_all
Weekday.destroy_all

Meal.create(name: "Breakfast")
Meal.create(name: "Morning Snack")
Meal.create(name: "Lunch")
Meal.create(name: "Afternoon Snack")
Meal.create(name: "Dinner")
Meal.create(name: "Dessert")

Weekday.create(day: "Sunday")
Weekday.create(day: "Monday")
Weekday.create(day: "Tuesday")
Weekday.create(day: "Wednesday")
Weekday.create(day: "Thursday")
Weekday.create(day: "Friday")
Weekday.create(day: "Saturday")
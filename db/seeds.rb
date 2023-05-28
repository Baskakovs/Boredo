# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Clear existing data before re-seeding
require 'dotenv/load'
require 'openai'

openai_client = OpenAI::Client.new(api_key: ENV["OPENAI_API_KEY"])

puts "Clearing existing data..."
User.destroy_all

# Generate 100 users with name, email, and date of birth
puts "Seeding the database..."

geographies = ["USA", "UK", "Germany", "China", "France", "Japan", "EU", "Poland", "Ukraine", "Brazil", "Canada", "India", "Russia", "Australia", "Mexico", "South Korea", "Italy", "Spain", "Netherlands", "Switzerland", "Sweden", "Norway", "Argentina", "Turkey", "Saudi Arabia", "United Arab Emirates", "South Africa", "Egypt", "Indonesia", "Singapore", "Thailand", "New Zealand", "Greece", "Belgium", "Austria", "Portugal", "Ireland", "Denmark", "Czech Republic", "Israel", "Finland", "Malaysia", "Colombia", "Chile", "Vietnam", "Philippines", "Iran", "Pakistan"]

geographies.each do |geography|
  new_geography = Geography.create(name: geography)

  prompt = "Generate categories (for example: economics, sports, politics) that are unique to #{geography}:"
  response = openai_client.completions(
    engine: 'davinci',
    prompt: prompt,
    max_tokens: 50,
    n: 1,
    stop: nil,
    temperature: 0.7
  )

  categories = response['choices'].map { |choice| choice['text'].strip }
  categories.each do |category|
    new_category = Category.create(name: category, geography_id: new_geography.id)

    prompt = "Generate titles (for example: the 20th National Congress of the CCP) that are unique to #{geography} and the category #{category}:"
    response = openai_client.completions(
      engine: 'davinci',
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: nil,
      temperature: 0.7
    )

    titles = response['choices'].map { |choice| choice['text'].strip }
    titles.each do |title|
      Title.create(name: title, geography_id: new_geography.id, category_id: new_category.id)
    end
  end
end


# 100.times do
#   name = Faker::Name.name
#   email = Faker::Internet.email
#   date_of_birth = Faker::Date.birthday(min_age: 18, max_age: 65)

#   user = User.create(name: name, email: email, date_of_birth: date_of_birth)

#   # Generate random number of posts (0 to 10) for each user
#   num_posts = rand(11)
#   num_posts.times do
#     # title = Faker::Lorem.sentence(word_count: 3)
#     content = Faker::Lorem.paragraph

#     user.posts.create(text: text)
#   end
# end

puts "Seeding completed!"
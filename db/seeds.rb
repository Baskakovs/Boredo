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
require 'faker'

# client = OpenAI::Client.new
client = OpenAI::Client.new(access_token: "")


puts "Clearing existing data..."
# User.destroy_all
# Title.destroy_all
# Category.destroy_all
# Geography.destroy_all
# Subcomment.destroy_all

# Generate 100 users with name, email, and date of birth
puts "Seeding the database..."

# geographies = ["USA", "UK", "Germany", "China", "France", "Japan", "EU", "Poland", "Ukraine", "Brazil", "Canada", "India", "Russia", "Australia", "Mexico", "South Korea", "Italy", "Spain", "Netherlands", "Switzerland", "Sweden", "Norway", "Argentina", "Turkey", "Saudi Arabia", "United Arab Emirates", "South Africa", "Egypt", "Indonesia", "Singapore", "Thailand", "New Zealand", "Greece", "Belgium", "Austria", "Portugal", "Ireland", "Denmark", "Czech Republic", "Israel", "Finland", "Malaysia", "Colombia", "Chile", "Vietnam", "Philippines", "Iran", "Pakistan"]

# geographies.each do |geography|
#   new_geography = Geography.create(name: geography)
# end


# geographies = ["USA"]

# geographies.each do |geography|
#     new_geography = Geography.create(name: geography)
  
#     prompt = "Generate broad categories (for example: economics, sports, politics) that are unique to #{geography}. Each category should be maximum three words long. No need to include the name of the country where it is not relevant."
#     response = client.chat(
#       parameters: {
#           model: "gpt-3.5-turbo", # Required.
#           messages: [{ role: "user", content: prompt}], # Required.
#           temperature: 0.7,
#           n: 5
#       })
  
#     categories = response['choices'].first['message']['content'].lines.map(&:strip)
#     categories.each do |category|
#       category_name = category.split("\n").first(3).join(" ").strip[3..-1] # Extract first 2-3 words
#       new_category = Category.create(name: category_name, geography_id: new_geography.id)
#       puts new_category.name
  
#       prompt = "Generate titles (for example: the 20th National Congress of the CCP) that are associated with #{geography} and the category #{category}. They should be more specific than the categories but maximum 4 words long."
#       response = client.chat(
#           parameters: {
#               model: "gpt-3.5-turbo", # Required.
#               messages: [{ role: "user", content: prompt}], # Required.
#               temperature: 0.7,
#               n: 10
#           })
#       title_response = response['choices'].first['message']['content']
#       titles = title_response.lines.map(&:strip)
#       titles.each do |title|
#         title_name = title.split("\n").first(3).join(" ").strip[3..-1] # Extract first 2-3 words
#         Title.create(name: title_name, geography_id: new_geography.id, category_id: new_category.id)
#       end
#     end
#   end

# 100.times do
#   name = Faker::Name.name
#   email = Faker::Internet.email
#   date_of_birth = Faker::Date.birthday(min_age: 18, max_age: 65)

#   user = User.create(name: name, email: email, date_of_birth: date_of_birth)

#   # Generate random number of posts (0 to 10) for each user
#   num_posts = rand(11)
  # num_posts.times do
  # 20.times do 
  #   # title = Faker::Lorem.sentence(word_count: 3)
  #   content = Faker::Lorem.paragraph

  #   Post.create(text: content, geography_id: Geography.all.sample.id, category_id: Category.all.sample.id, title_id: Title.all.sample.id, user_id: 1)
  # end

100.times do 

  Comment.create(text: Faker::Lorem.paragraph, user_id: User.all.sample.id, post_id: Post.all.sample.id)
  
end

200.times do
  Subcomment.create(text: Faker::Lorem.paragraph, user_id: User.all.sample.id, comment_id: Comment.all.sample.id)
end


puts "Seeding completed!"
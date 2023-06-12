
require 'dotenv/load'
require 'openai'
require 'faker'

# client = OpenAI::Client.new

client = OpenAI::Client.new(access_token: "")

puts "Clearing existing data..."
puts "Seeding the database..."

geographies = Geography.all


categories = Category.all

categories.each do |category|
  15.times do
    phrase = Faker::Lorem.words(number: 2).join(' ')
    Title.create(name: phrase, geography_id: category.geography_id, category_id: category.id)
  end
end
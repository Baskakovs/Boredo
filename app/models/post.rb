class Post < ApplicationRecord
    belongs_to :geography
    belongs_to :user
    belongs_to :geography
    belongs_to :category
end

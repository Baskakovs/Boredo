class Post < ApplicationRecord
    belongs_to :geography
    belongs_to :user
end

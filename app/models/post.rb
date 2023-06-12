class Post < ApplicationRecord
    belongs_to :geography
    belongs_to :user
    belongs_to :geography
    belongs_to :category
    belongs_to :title
    has_many :comments

    #validations
    validates :text, presence: true
    # validates :title_id, presence: true
    validates :category_id, presence: true
    validates :geography_id, presence: true
    validates :user_id, presence: true
end

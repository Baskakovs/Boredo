class User < ApplicationRecord
    has_many :posts

    #validations
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :date_of_birth, presence: true
    
end

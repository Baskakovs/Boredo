class User < ApplicationRecord

    has_secure_password
    # validates :password, presence: true, length: { minimum: 6 }

end

#     PASSWORD_REQUIREMENTS = /\A
#     (?=.{8,})          # Must contain 20 or more characters
#     (?=.*\d)            # Must contain a digit
#     (?=.*[a-z])         # Must contain a lowercase character
#     (?=.*[A-Z])         # Must contain an uppercase character
#     (?=.*[[:^alnum:]])  # Must contain a symbol
#   /x
  
#     #Validations
#     validates :name, presence: true
#     validates :email, presence: true, uniqueness: true, format: { with: 
#     URI::MailTo::EMAIL_REGEXP }
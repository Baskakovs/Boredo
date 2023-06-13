class GSerializer < ActiveModel::Serializer
  attributes :id, :User, :name, :email, :date_of_birth, :password_digest, :google
end

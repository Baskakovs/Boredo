class PostWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :text, :geography, :category, :title, :user
  has_many :comments, serializer: CommentSerializer
end

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user
  has_many :subcomments, serializer: SubcommentSerializer
end

class SubcommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user
end

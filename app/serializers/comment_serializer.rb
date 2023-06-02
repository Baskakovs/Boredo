class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :subcomments
end

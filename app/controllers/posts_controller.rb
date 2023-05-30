require 'byebug'
class PostsController < ApplicationController
    def first
        posts = Post.order('RANDOM()').limit(15)
        render json: posts, status: 200
    end
end

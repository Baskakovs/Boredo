require 'byebug'
class PostsController < ApplicationController
    def first
        posts = Post.order('RANDOM()').limit(15)
        render json: posts, status: 200
    end

    def country
        country = Geography.find(params[:id])
        posts = country.posts.limit(15)
        render json: posts, each_serializer: PostsByCountrySerializer, status: 200
    end

    def category
        category = Category.find(params[:id])
        posts = category.posts.limit(15)
        render json: posts, each_serializer: PostsByCategorySerializer, status: 200
    end

    def title
        title = Title.find(params[:id])
        posts = title.posts
        render json: posts, each_serializer: PostsByTitleSerializer, status: 200
    end

end

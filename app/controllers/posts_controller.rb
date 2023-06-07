require 'byebug'
class PostsController < ApplicationController

    def show
        post = Post.find(params[:id])
        render json: post, serializer: PostWithCommentsSerializer, status: 200
    end
    
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

    def index
        user = User.find(session[:user_id])
        render json: user.posts, status: 200
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: 201
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    private

    def post_params
        params.require(:post).permit(:text, :title_id, :category_id, :geography_id, :user_id, :published)
    end

    def unprocessable_entity(e)
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end

end
require 'byebug'
require 'googleauth'
class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def create
        @user = User.create!(user_params)
        render json: @user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    def show
        @user = User.find_by(id: session[:user_id])
        if @user
            render json: @user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        @user = User.find_by(id: session[:user_id])
        @user.update!(user_params)
        render json: @user
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    def update_password
        @user = User.find_by(id: session[:user_id])
      
        if @user.authenticate(password_params[:old_password]) &&
            password_params[:password] == password_params[:password_confirmation]
          @user.update!(password: password_params[:password])
          render json: @user
        else
            unprocessable_entity(self)
        end
    end
  
    def google_oauth
        data = Google::Auth::IDTokens.verify_oidc params[:token], aud: "767405110986-cl5aotldrqd1k03p18tsc7apq3leedpr.apps.googleusercontent.com"
        @user = User.find_or_create_by(email: data['email'], google?: true, name: data['name']) 
        @user.save(validate: false)
        render json: @user, status: :created
        session[:user_id] = @user.id
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    def destroy
        @user = User.find_by(id: session[:user_id])
        @user.posts.destroy_all
        @user.comments.destroy_all
        @user.subcomments.destroy_all
        @user.destroy
        head :no_content
    end

    private
  
    def user_params
    # byebug
      params.permit(:name, :email, :date_of_birth, :password)
    end

    def password_params
        params.permit(:password, :password_confirmation, :old_password)
    end

    def unprocessable_entity(e)
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end
  end
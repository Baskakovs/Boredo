require 'byebug'
class UsersController < ApplicationController
    def create
      @user = User.new(user_params)
  
      if @user.save
        render json: { message: 'User created successfully' }, status: :created
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def user_params
    # byebug
      params.permit(:name, :email, :date_of_birth, :password)
    end
    def unprocessable_entity(e)
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end
  end
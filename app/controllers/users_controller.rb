require 'byebug'
class UsersController < ApplicationController
    def create
        @user = User.create!(user_params)
        render json: @user, status: :created
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
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
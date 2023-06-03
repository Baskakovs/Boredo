class UsersController < ApplicationController
    def check_user_signup
        user = User.create!(user_params)
        render status: 200
    rescue ActiveRecord::RecordInvalid => e
        unprocessable_entity(e)
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :date_of_birth)
    end

    def unprocessable_entity(e)
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end

end

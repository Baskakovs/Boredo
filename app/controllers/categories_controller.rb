class CategoriesController < ApplicationController
    def index_by_country
        country = Geography.find_by(name: params[:country_name])
        # byebug
        categories = country.categories
        render json: categories, status: 200
    end
end

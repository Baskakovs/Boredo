class CategoriesController < ApplicationController
    def index_by_country
        country = Geography.find(params[:id])
        categories = country.categories
        render json: categories, status: 200
    end
end

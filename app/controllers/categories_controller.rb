class CategoriesController < ApplicationController
    def index_by_country
        country = Geography.find_by(name: params[:country_name])
        # byebug
        categories = country.categories
        render json: categories, status: 200
    end

    def index_by_category
        category = Category.find(params[:id])
        titles = category.titles
        render json: titles, status: 200
    end
end

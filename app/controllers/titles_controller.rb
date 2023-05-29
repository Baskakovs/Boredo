class TitlesController < ApplicationController
    def index_by_category
        category = Category.find(params[:id])
        titles = category.titles
        render json: titles, status: 200
    end
end

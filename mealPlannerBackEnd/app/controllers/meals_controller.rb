class MealsController < ApplicationController
    before_action :set_menu, only: [:show, :update, :destroy]

    def index
        @meals = Meal.all 
        render json: @meals
    end

    def show 
        @meal = Meal.find(params[:id])
        render json: @meal
    end


end

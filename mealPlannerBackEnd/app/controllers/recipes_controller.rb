class RecipesController < ApplicationController

    before_action :set_recipe, only: [:show, :update, :destroy]
    
    def index 
    @recipes = Recipe.all 
    render json: @recipes
    end

    def show 
        render json: @recipe
    end 

    def create
        @recipe = Recipe.new(recipe_params)
        if @recipe.valid?
            @recipe.save
            render json: @recipe 
        else
            render json: @recipe.errors.full_messages
        end
    end

    def destroy
        @recipe.destroy
    end

    def update
        @recipe = Recipe.find(params[:id])
        if @recipe.update(recipe_params)
        render json: @recipe
        else 
            render :edit
        end
    end

    private 
    def set_recipe
        @recipe = Recipe.find(params[:id])
    end


    def recipe_params
        params.require(:recipe).permit(:recipe_id, :name, :image_url, :ingredients, :instructions)
    end
end

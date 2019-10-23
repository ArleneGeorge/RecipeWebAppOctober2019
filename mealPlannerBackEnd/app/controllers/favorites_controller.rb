class FavoritesController < ApplicationController
    def index
        @favorites = Favorite.all 
        render json: @favorites
    end

    def show 
        @favorite = Favorite.find(params[:id])
        render json: @favorite 
    end

    def create
        @favorite = Favorite.create({
            user_id: params[:user_id],
            recipe_id: params[:recipe_id]
        })
        render json: @favorite 
    end

    def destroy
        @favorite.destroy
    end


    
end

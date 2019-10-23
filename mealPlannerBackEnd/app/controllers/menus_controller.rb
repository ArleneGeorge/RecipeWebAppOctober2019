class MenusController < ApplicationController
    def index
        @menus = Menu.all 
        render json: @menus
    end

    def show
        @menu = Menu.find(params[:id])
    end

    def create
        @menu = Menu.new(menu_parmas)
        if @menu.valid?
            @menu.save
            render json: @menu 
        else
            render json: @menu.errors.full_messages
        end
    end

    def destroy
        @menu.destroy
    end

    private 
    def menu_parmas
        params.require(:menu).permit(:user_id, :weekday_id, :meal_id, :recipe_id, :favorite_id)
    end
end

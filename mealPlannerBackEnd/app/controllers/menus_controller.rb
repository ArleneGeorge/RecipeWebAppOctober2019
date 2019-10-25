class MenusController < ApplicationController
    def index
        @menus = Menu.all 
        render json: @menus, include: :recipe
    end

    def show
        @menu = Menu.find(params[:id])
        render json: @menu, include: :recipe
    end

    def create
        @menu = Menu.create(menu_params)
        render json: @menu
    end

    def destroy
        @menu.destroy
    end

    private 

    def set_menu
        @menu = Menu.find(params[:id])
    end

    def menu_params
        params.require(:menu).permit(:weekday, :meal, :recipe_id)
    end
end

class UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :destroy]

    def index
        @users = User.all 
        render json: @users
    end

    def show 
        @user = User.find(params[:id])
        render json: @user
    end 

    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            render json: @user 
        else
            render json: @user.errors.full_messages
        end
    end

    def destroy
        @user.destroy
    end

    private 

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name, :username, :image_url, :password)
    end
end

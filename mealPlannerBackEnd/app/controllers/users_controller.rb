class UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users
    end

    def show 
        @user = User.find(params[:id])
        render json: @user
    end 

    def create
        @user = user.new(user_parmas)
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
    def user_parmas
        params.require(:user).permit(:name, :usernam, :password)
    end
end

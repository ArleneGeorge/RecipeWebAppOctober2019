class WeekdaysController < ApplicationController
    def index
        @weekdays = Weekday.all 
        render json: @weekdays
    end

    def show 
        @weekday = Weekday.find(params[:id])
        render json: @weekday 
    end
end

class Menu < ApplicationRecord
  belongs_to :user
  belongs_to :weekday
  belongs_to :meal
  belongs_to :recipe
  belongs_to :favorite
end

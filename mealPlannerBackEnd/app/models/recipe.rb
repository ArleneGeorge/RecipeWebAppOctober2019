class Recipe < ApplicationRecord
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    has_many :menus, dependent: :destroy
end

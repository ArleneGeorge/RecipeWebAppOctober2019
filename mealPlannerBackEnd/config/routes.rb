Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :menus, only: [:index, :show, :create, :delete]
resources :recipes
resources :favorites, only: [:index, :show, :create, :delete]
resources :users, only: [:index, :show, :create, :delete]
resources :meals, only: [:index, :show]
resources :weekdays, only: [:index, :show]

end

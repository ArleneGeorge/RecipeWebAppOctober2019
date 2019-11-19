Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :menus
resources :recipes
resources :favorites, only: [:index, :show, :create, :delete]
resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
resources :meals, only: [:index, :show]
resources :weekdays, only: [:index, :show]

end

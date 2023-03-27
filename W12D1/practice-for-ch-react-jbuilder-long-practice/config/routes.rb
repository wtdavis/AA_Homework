Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
namespace :api, defaults: {format: :json} do
  resources :gifts, only: [ :show] 
  resources :guests, only: [:index, :show] do
    resources :gifts, only: [:index]
  end
  resources :parties, only: [:index, :show] 
end
  # Defines the root path route ("/")
  # root "articles#index"
end
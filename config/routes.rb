Rails.application.routes.draw do
  resources :users
  resources :subcomments
  resources :sessions
  resources :posts
  resources :comments
  resources :categories
  resources :names
  namespace :api do
    get "/me", to: "users#show"
    resources :geographies
    resources :recipes, only: [:index, :create]
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
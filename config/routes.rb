Rails.application.routes.draw do
  
  resources :subcomments
  resources :comments
  resources :users
  resources :posts
  resources :titles, only: [:index, :show]
  resources :categories, only: [:index, :show]
  resources :geographies, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

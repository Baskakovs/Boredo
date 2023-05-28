Rails.application.routes.draw do
  
  resources :subcomments
  resources :comments
  resources :users
  resources :posts
  resources :titles
  resources :categories
  resources :geographies
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

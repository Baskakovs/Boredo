Rails.application.routes.draw do
  
  resources :subcomments
  resources :comments
  resources :users
  resources :posts
  resources :titles, only: [:index, :show]
  get '/geographies', to: 'geographies#index'
  get '/geographies/:country_name', to: 'categories#index_by_country'
  resources :categories, only: [:index]
  get '/categories/:id', to: 'titles#index_by_category'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

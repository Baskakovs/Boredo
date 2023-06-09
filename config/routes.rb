Rails.application.routes.draw do
  
  resources :sessions
  resources :subcomments
  resources :comments
  resources :users
  resources :users, only: [:create, :show] do
    resources :posts, only: [:index]
  end
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show' 
  resources :posts, only: [:create, :show, :update]
  get '/posts_first', to: 'posts#first'
  get '/posts/country/:id', to: 'posts#country'
  get '/posts/category/:id', to: 'posts#category'
  get 'posts/title/:id', to: 'posts#title'

  resources :titles, only: [:index, :show]
  resources :geographies, only: [:index, :show] do
    resources :categories, only: [:index] do
      resources :titles, only: [:index]
    end
  end 

  get '/geographies', to: 'geographies#index'
  get '/geographies/:id', to: 'categories#index_by_country'
  resources :categories, only: [:index]
  get '/categories/:id', to: 'titles#index_by_category'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

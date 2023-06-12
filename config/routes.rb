Rails.application.routes.draw do
  namespace :api do
  resources :sessions
  resources :subcomments
  resources :comments
  patch '/users/update_password', to: 'users#update_password'
  resources :users
  post 'users/google', to: 'users#google_oauth'
  resources :users, only: [:create, :show] do
    resources :posts, only: [:index]
  end
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show' 
  resources :posts
  get '/posts_first', to: 'posts#first'
  get '/posts/country/:id', to: 'posts#country'
  get '/posts/category/:id', to: 'posts#category'
  get 'posts/title/:id', to: 'posts#title'

  resources :titles, only: [:index, :show]

  resources :geographies, only: [:index, :show] do
    resources :categories, only: [:index]
  end 

  resources :categories, only: [:index, :show] do
    resources :titles, only: [:index]
  end

  get '/geographies', to: 'geographies#index'
  # get '/geographies/:id', to: 'categories#index_by_country'
  resources :categories, only: [:index]

end
  # get '/categories/:id', to: 'titles#index_by_category'xw

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
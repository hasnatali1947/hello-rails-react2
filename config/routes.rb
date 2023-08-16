Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index] do
        collection do
          get :random
        end
      end
    end
  end
  root "greetings#index"
end
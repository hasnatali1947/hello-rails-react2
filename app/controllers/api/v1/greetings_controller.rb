module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greeting = Greeting.all

        render json: @greeting, status: :ok
      end

      def random
        @random_message = Greeting.all.sample
        render json: @random_message, status: :ok
      end
    end
  end
end

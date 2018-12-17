require 'movie_api'

class MoviesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    Movie.create(MovieApi.new.trending_params)
  end
end

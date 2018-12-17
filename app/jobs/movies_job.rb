require 'movie_api'

class MoviesJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # url = 'http://image.tmdb.org/t/p/w300'
    MovieApi.new.trending.each do |attributes|
      Movie.create(overview: attributes[:overview], poster_path: attributes[:poster_path], 
                   release_date: Date.parse(attributes[:release_date]), title: attributes[:title], 
                   rating: attributes[:vote_average])
    end
  end
end

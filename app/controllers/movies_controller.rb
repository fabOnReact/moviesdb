class MoviesController < ApplicationController
  before_action :set_api

  def index
    @movies = Tmdb::Movie.popular
    @movies = Tmdb::Genre.detail(params[:genre].to_i).results if params[:genre]
  end

  private 
  def set_api; Tmdb::Api.key(ENV['TMDB_API_KEY']); end
end

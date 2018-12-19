require 'http'
require 'json'

# https://github.com/ahmetabdi/themoviedb
class MovieApi
  ENDPOINT="https://api.themoviedb.org"
  VERSION=3
  attr_reader :configuration, :trending, :trending_params
  def endpoint; "#{ENDPOINT}/#{VERSION}"; end
  def key; "api_key=#{ENV['TMDB_API_KEY']}"; end

  def initialize
    configuration
    trending
  end

  def configuration
    @response = HTTP.get("#{endpoint}/configuration?#{key}")
    @configuration = response_to_json
  end 

  def trending
    @response = HTTP.get "#{endpoint}/trending/movie/day?#{key}"
    @trending = response_to_json[:results] 
  end

  def response_to_json
    JSON.parse(@response.body.to_s, symbolize_names: true)
  end

  def trending_params
    @trending_params =  @trending.map {|attributes| ActionController::Parameters.new(attributes).permit(:overview, :poster_path, :release_date, :title, :vote_average)}
  end
end

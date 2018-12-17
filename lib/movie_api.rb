require 'http'
require 'json'

class MovieApi 
  ENDPOINT="https://api.themoviedb.org"
  VERSION=3
  attr_reader :configuration, :trending
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
end

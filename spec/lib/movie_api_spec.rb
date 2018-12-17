require 'rails_helper'
require 'movie_api'
require 'http'

describe MovieApi do 
  let(:api) { MovieApi.new }
  describe 'endpoint' do 
    it 'return the correct endpoint' do 
      expect(MovieApi.new.endpoint).to eql("https://api.themoviedb.org/3")
    end
  end

  describe 'configuration' do
    it 'return a valid json response' do
      expect(api.configuration["images"].size).to be > 0
    end
  end

  describe 'trending' do
    it 'return a valid json response' do 
      expect(api.trending["results"].size).to be > 0
    end
  end
end

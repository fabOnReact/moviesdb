require 'rails_helper'

RSpec.describe MoviesJob, type: :job do
  describe 'perform' do 
    it 'save the trending movies' do 
      expect{MoviesJob.perform_now}.to change(Movie, :count)
    end
  end
end

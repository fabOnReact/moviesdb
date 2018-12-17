class AdaptFieldToApi < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :rating, :integer
    add_column :movies, :vote_average, :integer
  end
end

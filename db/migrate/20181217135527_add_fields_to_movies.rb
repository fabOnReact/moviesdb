class AddFieldsToMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :name, :string
    remove_column :movies, :image, :string
    add_column :movies, :title, :string
    add_column :movies, :overview, :string
    add_column :movies, :poster_path, :string
    add_column :movies, :release_date, :date
    add_column :movies, :rating, :integer
  end
end

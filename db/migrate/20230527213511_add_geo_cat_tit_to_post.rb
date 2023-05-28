class AddGeoCatTitToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :geolocation, :string
    add_column :posts, :category, :string
    add_column :posts, :title, :string
  end
end

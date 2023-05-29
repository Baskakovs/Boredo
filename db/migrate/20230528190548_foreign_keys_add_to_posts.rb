class ForeignKeysAddToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :category_id, :integer
    add_column :posts, :geography_id, :integer
    remove_column :posts, :geolocation
  end
end

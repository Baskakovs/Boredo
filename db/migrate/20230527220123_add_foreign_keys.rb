class AddForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :geography_id, :integer
    add_column :titles, :geography_id, :integer
    add_column :titles, :category_id, :integer
  end
end

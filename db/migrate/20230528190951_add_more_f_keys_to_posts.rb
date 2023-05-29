class AddMoreFKeysToPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :title
    add_column :posts, :title_id, :integer
  end
end

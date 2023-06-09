class AddGoogleColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :google?, :boolean, default: false
  end
end

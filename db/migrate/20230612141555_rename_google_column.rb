class RenameGoogleColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :google?, :google
  end
end

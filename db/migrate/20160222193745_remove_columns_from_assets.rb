class RemoveColumnsFromAssets < ActiveRecord::Migration
  def change
    remove_column :assets, :link
    remove_column :assets, :processed
    # remove_column :assets, :upload_file_name
    # remove_column :assets, :upload_content_type
    # remove_column :assets, :upload_file_size
    # remove_column :assets, :upload_updated_at
  end
end

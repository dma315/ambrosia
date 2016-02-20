class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
      t.string :link
      t.text :caption
      t.references :experience, null: false
      t.string :direct_upload_url, null: false 
      t.integer :user_id, null: false
      t.attachment :upload
      t.boolean :processed, default: false, null: false
      t.timestamps null: false
    end
    add_index :assets, :user_id
    add_index :assets, :processed
  end
end

class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
      t.string :link
      t.text :caption
      t.references :experience, null: false 

      t.timestamps null: false
    end
  end
end

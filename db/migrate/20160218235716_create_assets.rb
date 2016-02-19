class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
      t.string :link
      t.text :caption 

      t.timestamps null: false
    end
  end
end

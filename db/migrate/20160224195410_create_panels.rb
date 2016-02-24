class CreatePanels < ActiveRecord::Migration
  def change
    create_table :panels do |t|
      t.integer :experience_id, null: false
      t.string :panel_type, null: false
      t.integer :number_asset_input

      t.timestamps null: false
    end

    add_column :assets, :panel_id, :integer
  end
end

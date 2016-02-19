class CreateExperiences < ActiveRecord::Migration
  def change
    create_table :experiences do |t|
      t.string :title, null: false
      t.date :start_date, null: false
      t.date :end_date
      t.text :description
      t.references :user, null: false

      t.timestamps null: false
    end
  end
end

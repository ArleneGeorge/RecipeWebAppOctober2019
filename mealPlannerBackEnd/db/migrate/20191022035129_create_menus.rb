class CreateMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :menus do |t|
      t.references :user, null: false, foreign_key: true
      t.references :weekday, null: false, foreign_key: true
      t.references :meal, null: false, foreign_key: true
      t.references :recipe, null: false, foreign_key: true
      t.references :favorite, null: false, foreign_key: true

      t.timestamps
    end
  end
end

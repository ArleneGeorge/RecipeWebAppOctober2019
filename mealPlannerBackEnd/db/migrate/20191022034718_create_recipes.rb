class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image_url, default: 'https://thumbnails-photos.amazon.com/v1/thumbnail/XBPSRSR_SuaTa98WG0e32w?viewBox=740%2C740&ownerId=AFOULTZUS5V84'
      t.string :ingredients
      t.string :instructions
      t.timestamps
    end
  end
end

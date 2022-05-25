class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :lyrics
      t.string :image

      t.timestamps
    end
  end
end

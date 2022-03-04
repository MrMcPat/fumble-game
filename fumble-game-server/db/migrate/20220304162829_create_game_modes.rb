class CreateGameModes < ActiveRecord::Migration[6.1]
  def change
    create_table :game_modes do |t|
      t.string :game_mode
    end
  end
end

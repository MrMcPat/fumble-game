class CreateGameModes < ActiveRecord::Migration[6.1]
  def change
    create_table :player_scores do |t|
      t.string :name
      t.integer :high_score
      t.string :game_result
      t.string :date
      t.string :time
      t.integer :game_mode_id
    end
  end
end

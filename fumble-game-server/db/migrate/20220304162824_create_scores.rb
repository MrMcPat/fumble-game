class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :high_score
      t.string :game_result
      t.string :date
      t.string :time
      t.integer :player_id
      t.integer :game_mode_id
    end
  end
end

class Score < ActiveRecord::Base
    belongs_to :player
    belongs_to :game_mode
end
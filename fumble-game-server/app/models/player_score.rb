class PlayerScore < ActiveRecord::Base
    belongs_to :game_mode
end
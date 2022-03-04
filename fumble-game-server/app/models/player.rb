class Player < ActiveRecord::Base
    has_many :scores
    has_many :game_modes, through: :scores
end
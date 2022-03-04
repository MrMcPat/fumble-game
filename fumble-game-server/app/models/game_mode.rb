class GameMode < ActiveRecord::Base
    has_many :scores
    has_many :players, through: :scores
end
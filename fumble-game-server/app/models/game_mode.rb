class GameMode < ActiveRecord::Base
    has_many :player_scores

    def self.game_mode_popularity
        GameMode.all.sort_by do |gamemode|
            -gamemode.player_scores.count
        end
    end

    def self.ranking
        GameMode.all.map do |gamemode|
            gamemode.player_scores.order(high_score: :desc).limit(3)
        end
    end
end
class GameMode < ActiveRecord::Base
    has_many :player_scores

    def self.game_mode_popularity
        GameMode.all.max_by do |gamemode|
            gamemode.player_scores.count
        end
    end

    def self.sequence_game_3x3
        GameMode.first.player_scores.order(high_score: :desc).limit(3)
    end

    def self.sequence_game_4x4
        GameMode.second.player_scores.order(high_score: :desc).limit(3)
    end

    def self.sequence_game_5x5
        GameMode.third.player_scores.order(high_score: :desc).limit(3)
    end

    def self.easy_number_memory
        GameMode.fourth.player_scores.order(high_score: :desc).limit(3)
    end

    def self.number_memory
        GameMode.fifth.player_scores.order(high_score: :desc).limit(3)
    end
    
    def self.extreme_number_memory
        GameMode.find_by(id: 6).player_scores.order(high_score: :desc).limit(3)
    end

    def self.color_match
        GameMode.find_by(id: 7).player_scores.order(high_score: :desc).limit(3)
    end

    def self.crazy_color_match
        GameMode.find_by(id: 8).player_scores.order(high_score: :desc).limit(3)
    end

    def self.death_color_match
        GameMode.find_by(id: 9).player_scores.order(high_score: :desc).limit(3)
    end
end
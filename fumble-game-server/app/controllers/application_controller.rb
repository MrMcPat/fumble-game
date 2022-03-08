class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/" do
    "Hello world!"
  end

  get "/player_scores" do
    player_scores = PlayerScore.all
    player_scores.to_json(include: :game_mode)
  end

  get "/player_scores/:id" do
    player_scores = PlayerScore.find(params[:id])
    player.to_json(include: :game_mode)
  end

  get "/game_modes/game_mode_popularity" do
    game_mode = GameMode.game_mode_popularity
    game_mode.to_json
  end

  get "/game_modes/sequence_game_3x3" do
    game_mode = GameMode.sequence_game_3x3
    game_mode.to_json
  end

  get "/game_modes/sequence_game_4x4" do
    game_mode = GameMode.sequence_game_4x4
    game_mode.to_json
  end

  get "/game_modes/sequence_game_5x5" do
    game_mode = GameMode.sequence_game_5x5
    game_mode.to_json
  end

  get "/game_modes/easy_number_memory" do
    game_mode = GameMode.easy_number_memory
    game_mode.to_json
  end

  get "/game_modes/number_memory" do
    game_mode = GameMode.number_memory
    game_mode.to_json
  end

  get "/game_modes/extreme_number_memory" do
    game_mode = GameMode.extreme_number_memory
    game_mode.to_json
  end

  get "/game_modes/color_match" do
    game_mode = GameMode.color_match
    game_mode.to_json
  end

  get "/game_modes/crazy_color_match" do
    game_mode = GameMode.crazy_color_match
    game_mode.to_json
  end

  get "/game_modes/death_color_match" do
    game_mode = GameMode.death_color_match
    game_mode.to_json
  end

  post "/player_scores" do
    player_score = PlayerScore.create(
      name: params[:name],
      high_score: params[:high_score],
      game_result: params[:game_result],
      date: params[:date],
      time: params[:date],
      game_mode_id: params[:game_mode_id]
    )
    player_score.to_json
  end

  delete '/player_scores/:id' do
    player_score = PlayerScore.find(params[:id])
    player_score.destroy
    player_score.to_json
  end
  
end

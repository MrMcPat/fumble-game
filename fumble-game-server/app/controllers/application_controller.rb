class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/" do
    "Hello world!"
  end

  get "/player_scores" do
    player_scores = PlayerScore.all.order(id: :desc)
    player_scores.to_json(include: :game_mode)
  end

  get "/player_scores/:id" do
    player_scores = PlayerScore.find(params[:id])
    player.to_json(include: :game_mode)
  end

  get "/game_modes/game_mode_popularity" do
    game_modes = GameMode.game_mode_popularity
    game_modes.to_json
  end

  get "/game_modes/ranking" do
    game_modes = GameMode.ranking
    game_modes.to_json
  end

  post "/player_scores" do
    player_score = PlayerScore.create(
      name: params[:name],
      high_score: params[:high_score],
      game_result: params[:game_result],
      date: params[:date],
      time: params[:time],
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

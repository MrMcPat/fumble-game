class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get "/" do
      "Hello world!"
    end

    get "/players" do
    end

    get "/scores" do
    end

    get "/game_modes" do
    end
    
  end
  
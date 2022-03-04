# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_04_162829) do

  create_table "game_modes", force: :cascade do |t|
    t.string "game_mode"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
  end

  create_table "scores", force: :cascade do |t|
    t.integer "high_score"
    t.string "game_result"
    t.string "date"
    t.string "time"
    t.integer "player_id"
    t.integer "game_mode_id"
  end

end

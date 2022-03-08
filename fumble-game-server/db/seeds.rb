puts "Remove old data..."

PlayerScore.destroy_all
GameMode.destroy_all

puts "Creating game mode data..."

game_mode1 = GameMode.create(game_mode: "Sequence Game (3x3)")
game_mode2 = GameMode.create(game_mode: "Sequence Game (4x4)")
game_mode3 = GameMode.create(game_mode: "Sequence Game (5x5)")
game_mode4 = GameMode.create(game_mode: "Easy Number Memory")
game_mode5 = GameMode.create(game_mode: "Number Memory")
game_mode6 = GameMode.create(game_mode: "Extreme Number Memory")
game_mode7 = GameMode.create(game_mode: "Color Match")
game_mode8 = GameMode.create(game_mode: "Crazy Color Match")
game_mode9 = GameMode.create(game_mode: "Death Color Match")

puts "Creating player score data..."

PlayerScore.create(name: "Patrick", high_score: 7, game_result: nil, date: "8-2-2022", time: "13:30", game_mode_id: game_mode3.id)
PlayerScore.create(name: "Rickpat", high_score: 8, game_result: 1234341432, date: "8-3-2022", time: "12:21", game_mode_id: game_mode5.id)
PlayerScore.create(name: "Rick", high_score: 5, game_result: 984932, date: "8-5-2022", time: "16:52", game_mode_id: game_mode6.id)
PlayerScore.create(name: "Pat", high_score: 2, game_result: nil, date: "7-23-2022", time: "10:35", game_mode_id: game_mode1.id)
PlayerScore.create(name: "Fran", high_score: 4, game_result: 4535435, date: "8-4-2022", time: "11:13", game_mode_id: game_mode5.id)
PlayerScore.create(name: "Francis", high_score: 15, game_result: nil, date: "8-2-2022", time: "09:40", game_mode_id: game_mode3.id)
PlayerScore.create(name: "Lyn", high_score: 16, game_result: nil, date: "8-1-2022", time: "08:22", game_mode_id: game_mode2.id)
PlayerScore.create(name: "Lynden", high_score: 20, game_result: nil, date: "7-30-2022", time: "20:47", game_mode_id: game_mode3.id)
PlayerScore.create(name: "Kev", high_score: 12, game_result: nil, date: "7-20-2022", time: "19:48", game_mode_id: game_mode8.id)
PlayerScore.create(name: "Rat", high_score: 4, game_result: nil, date: "7-25-2022", time: "17:45", game_mode_id: game_mode9.id)

puts "Seeding done!"
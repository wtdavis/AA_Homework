json.array! @guests do |guest|
    # json.extract! guest, :name, :age, :favorite_color
    json.partial "/api/guests/show.json.jbuilder"
end
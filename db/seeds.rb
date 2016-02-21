# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Experience.destroy_all

10.times do
  User.create!(
    first_name:
    )
end

# user = User.create!(first_name: "calvin", last_name: "lang", email: "c@c.com" , username: "calvin", password: "password")

# asset1 = Asset.create!(link: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
#                        caption: "This is some stuff",
#                        experience_id: 1,
#                        direct_upload_url: "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
#                        user_id: 1,
#                        upload_file_name: "string")

# asset2 = Asset.create!(link: "https://porelplanetaphoto.com/noticias/wp-content/uploads/2015/10/34059861vEE.jpg",
#                        caption: "This is some stuff",
#                        experience_id: 1,
#                        direct_upload_url: "https://porelplanetaphoto.com/noticias/wp-content/uploads/2015/10/34059861vEE.jpg",
#                        user_id: 1,
#                        upload_file_name: "string")

# asset3 = Asset.create!(link: "http://img08.deviantart.net/cb77/i/2012/122/1/a/landscape_wallpaper_by_nickchoubg-d4yaep3.png",
#                        caption: "This is some stuff",
#                        experience_id: 1,
#                        direct_upload_url: "http://img08.deviantart.net/cb77/i/2012/122/1/a/landscape_wallpaper_by_nickchoubg-d4yaep3.png",
#                        user_id: 1,
#                        upload_file_name: "string")

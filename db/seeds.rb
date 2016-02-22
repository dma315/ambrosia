# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Experience.destroy_all

User.create!(
  first_name: "David",
  last_name: "Ma",
  email: "dma315@gmail.com",
  username: "dma315",
  password: "password")

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create!(
    first_name: first_name,
    last_name: last_name,
    email: Faker::Internet.email,
    username: first_name + "_" + last_name,
    password: "password"
    )
end

User.all.each do |user|
  20.times do
    user.experiences.create!(
      title: Faker::Hipster.sentence,
      description: Faker::Hipster.paragraph,
      start_date: DateTime.now.to_date,
      end_date: DateTime.now.to_date
      )
  end
end

images = [
  "http://www.ucreative.com/wp-content/uploads/2014/11/Landscape-Photography-Banner1.jpg",
  "https://porelplanetaphoto.com/noticias/wp-content/uploads/2015/10/34059861vEE.jpg",
  "http://img08.deviantart.net/cb77/i/2012/122/1/a/landscape_wallpaper_by_nickchoubg-d4yaep3.png",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper_279.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-1.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-2.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-3.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-4.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-5.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-6.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-8.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-9.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-10.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-11.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-12.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-15.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-16.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-17.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-18.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-19.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-20.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-21.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-22.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-23.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-24.jpg",
  "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-25.jpg"
]

Experience.all.each do |experience|
  5.times do
    url = images.sample
    experience.assets.create!(
      caption: Faker::Hipster.sentence,
      user: experience.user,
      direct_upload_url: url
      )
  end
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

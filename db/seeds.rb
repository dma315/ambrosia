# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Experience.destroy_all

u = User.create!(
  first_name: "John",
  last_name: "Smith",
  email: "john@smith.com",
  username: "jsmith",
  password_digest: "password"
  )

u.experiences.create!(
  title: "Trip to Hot Doug's",
  start_date: DateTime.now.to_date,
  end_date: DateTime.now.to_date,
  description: "Hot Doug's is closed now :("
  )
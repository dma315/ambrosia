FactoryGirl.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name}
    email { Faker::Internet.email }
    username { Faker::Internet.user_name }
    password { Faker::Internet.password}
    avatar_url { Faker::Avatar.image}
  end
end



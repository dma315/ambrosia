FactoryGirl.define do
  factory :asset do
    association :experience, factory: :experience
    association :user, factory: :user
    caption { Faker::Lorem.word }
    direct_upload_url { Faker::Avatar.image }
  end
end

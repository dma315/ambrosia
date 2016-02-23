FactoryGirl.define do
  factory :experience do
    association :user, factory: :user
    title { Faker::Lorem.word }
    start_date { DateTime.now.to_date }
    end_date { DateTime.now.to_date }
    description { Faker::Lorem.word }
  end
end



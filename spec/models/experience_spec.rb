require 'rails_helper'

describe Experience do
  it "has a valid factory" do
    FactoryGirl.create(:experience).should be_valid
  end

  it "is invalid without a title" do
    FactoryGirl.build(:experience, title:nil).should_not be_valid
  end

  it "is invalid without a start date" do
    FactoryGirl.build(:experience, start_date:nil).should_not be_valid
  end

  it "is invalid without a user" do
    FactoryGirl.build(:experience, user:nil).should_not be_valid
  end
end

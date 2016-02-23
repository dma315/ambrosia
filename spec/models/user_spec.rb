require 'rails_helper'

describe User do
  it "has a valid factory" do
    FactoryGirl.create(:user).should be_valid
  end

  it "is invalid without a first name" do
    FactoryGirl.build(:user, first_name:nil).should_not be_valid
  end

  it "is invalid without a last name" do
    FactoryGirl.build(:user, last_name:nil).should_not be_valid
  end

  it "is invalid without a email" do
    FactoryGirl.build(:user, email:nil).should_not be_valid
  end

  it "is invalid without a username" do
    FactoryGirl.build(:user, username:nil).should_not be_valid
  end

  it "is invalid with a duplicate email" do
    FactoryGirl.create(:user, email: "calvin@calvin.com")
    FactoryGirl.build(:user, email: "calvin@calvin.com").should_not be_valid
  end

  it "is invalid with a duplicate username" do
    FactoryGirl.create(:user, username: "calvin")
    FactoryGirl.build(:user, username: "calvin").should_not be_valid
  end
end

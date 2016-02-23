require 'rails_helper'

describe Asset do
  it "has a valid factory" do
    FactoryGirl.create(:experience).should be_valid
  end

  it "is invalid without a direct upload url" do
    FactoryGirl.build(:asset, direct_upload_url: nil).should_not be_valid
  end

  it "is invalid without a user" do
    FactoryGirl.build(:asset, user_id: nil).should_not be_valid
  end

  it "is invalid without an experience" do
    FactoryGirl.build(:asset, experience: nil).should_not be_valid
  end

end

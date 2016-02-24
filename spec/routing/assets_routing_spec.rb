require "rails_helper"

RSpec.describe AssetsController, :type => :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/users/1/assets").to route_to("assets#index", :user_id => "1")
    end
    it "routes to #create" do
      expect(:post => "/users/1/assets").to route_to("assets#create", :user_id => "1")
    end
    it "routes to #new" do
      expect(:get => "/users/1/assets/new").to route_to("assets#new", :user_id => "1")
    end
    it "routes to #show" do
      expect(:get => "/users/1/assets/2").to route_to("assets#show", :user_id => "1", :id => "2")
    end
    it "routes to #collection" do
      expect(:get => "/assets/collection").to route_to("assets#collection")
    end
  end
end

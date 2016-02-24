require 'rails_helper'
describe UsersController do

  let!(:user) {User.create}


  describe "GET #new" do
    it "creates an empty user object" do
      get :new
      expect(assigns(:user)).to be_a_kind_of(User)
    end
    it "renders new form" do
      get :new
      expect(response).to render_template('users/new')
    end
  end
  describe "POST #create" do
    context "when valid params are passed" do
      it "creates a new User" do
        original_user_count = User.count
        post :create, {user: {first_name:"Alex", last_name:"Lang", email:"alex@alex", username:"alex", password:"alex"}}
        expect(User.count).to eq(original_user_count + 1)
      end
    end
  end
end

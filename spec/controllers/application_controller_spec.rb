require 'rails_helper'
describe ApplicationController do

  describe "GET #index" do
    it 'loads the root page' do
      get :index
      expect(response).to render_template(root_path)
    end
  end
end



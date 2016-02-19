class ExperiencesController < ApplicationController

  def show
    @user = User.find_by(id: params[:user_id])
    @experience = Experience.find_by(id: params[:id])
  end
end

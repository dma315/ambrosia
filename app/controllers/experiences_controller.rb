class ExperiencesController < ApplicationController

  def show
    @user = User.find_by(id: params[:user_id])
    @experience = Experience.find_by(id: params[:id])
  end

  def new
    p "It's a hit!"
    @experience = Experience.new
    render "experiences/new", layout: false
  end
end

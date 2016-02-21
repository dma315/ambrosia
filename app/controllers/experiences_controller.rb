class ExperiencesController < ApplicationController

  def show
    @user = User.find_by(id: params[:user_id])
    @experience = Experience.find_by(id: params[:id])
    render :'layouts/application'
  end

  def index
  	render :'/experiences/exp1-partial.html.erb', layout: false
  end
end

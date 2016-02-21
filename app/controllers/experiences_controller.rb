class ExperiencesController < ApplicationController

  def show
    @user = User.find_by(id: params[:user_id])
    @experience = Experience.find_by(id: params[:id])
    render :'layouts/application'
  end

  def index
  	render :'/experiences/exp1-partial.html.erb', layout: false
  end

  def new
    @experience = Experience.new
    render "experiences/new", layout: false
  end

  def create
    @experience = Experience.new(experience_params)
    return 406 if @experience.title == ""
    @experience.user_id = session[:user_id]
    @experience.start_date = Time.now
    @experience.save
    if @experience.save
      respond_to do |format|
        format.html { render nothing: true }
      end
      return 202
    else
      return 406
    end
  end


  private

   def experience_params
      params.require(:experience).permit(:title, :start_date, :end_date, :description)
    end
end

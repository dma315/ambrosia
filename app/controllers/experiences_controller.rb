class ExperiencesController < ApplicationController
  include PanelsHelper

  def my_experiences
    @experiences = Experience.where(user_id: session[:user_id]).order(start_date: :desc)
    respond_to do |format|
      format.json { render json: @experiences.to_json(include: :assets) }
    end
  end

  def manage
    @panel_methods = panel_methods
    @experience = Experience.find(params[:id])
    @ordered_panels = @experience.panels.order(created_at: :asc)
    @unpaneled = @experience.assets.where(panel_id: nil)
    render 'experiences/manage', layout: false
  end

  def show
    @experience = Experience.find(params[:id])
    respond_to do |format|
      format.json { render json: @experience.to_json(include: :panels) }
    end
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
    if @experience.save
      respond_to do |format|
        format.js {}
      end
    else
      return 406
    end
  end

  def edit
    @experience = Experience.find(params[:id])
    render 'experiences/edit', layout: false
  end

  private

   def experience_params
      params.require(:experience).permit(:title, :start_date, :end_date, :description)
   end
end

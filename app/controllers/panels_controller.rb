class PanelsController < ApplicationController
  def index
    experience = Experience.find(params[:experience_id])
    respond_to do |format|
      format.json { render json: experience.panels.to_json(include: :assets) }
    end
  end
end


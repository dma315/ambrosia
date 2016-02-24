class PanelsController < ApplicationController
  def index
    experience = Experience.find(params[:experience_id])
    panels = []
    experience.panels.each do |panel|
      if panel.number_asset_input
        panels << [panel.panel_type, panel.number_asset_input]
      else
        panels << panel.panel_type
      end
    end
    respond_to do |format|
      format.json { render json: panels.to_json }
    end
  end
end


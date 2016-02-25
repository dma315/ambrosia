class PanelsController < ApplicationController
  include PanelsHelper

  def get_layouts
    respond_to do |format|
      format.json { render json: panel_methods.to_json }
    end
  end

  def index

    experience = Experience.find(params[:experience_id])
    panels = []
    ordered_panels = experience.panels.order(created_at: :asc)
    ordered_panels.each do |panel|
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

  def create

    # Because laziness, this also handles update...

    panel_id = params["panelID"].to_i
    asset_ids = params["assetIDs"].map(&:to_i)
    experience_id = params["experienceID"].to_i
    panel_type = params["method"]

    panel = Panel.find_by(id: panel_id)
    panel.panel_type = panel_type
    panel.save

    if panel_methods[panel_type][1] == "variable"
      panel.number_asset_input = asset_ids.length
      panel.save
    end

    # Unset any assets that were removed from panel
    panel.assets.each do |asset|
      asset.panel_id = nil
      asset.save
    end

    # Reset assets that were added to panel
    asset_ids.each do |id|
      asset = Asset.find_by(id: id)
      asset.panel_id = panel_id
      asset.save
    end

    respond_to do |format|
      format.js {}
    end

  end

  def new
    experience = Experience.find(params[:experience_id])
    # The new route leads to edit...HOW YOU LIKE ME NOW????????????
    @panel = experience.panels.create(panel_type: "loadSingleImage")
    render partial: 'panels/edit', locals: {panel: @panel}
  end

end


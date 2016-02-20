class AssetsController < ApplicationController
  def create
    user = User.find(params[:user_id])
    @asset = user.assets.create!(asset_params)
    redirect_to "/users/#{user.id}/assets"
  end

  def index
    user = User.find(params[:user_id])
    @assets_url = "/users/#{user.id}/assets"
  end

  def show
    user = User.find(params[:user_id])
    @asset = user.assets.find(params[:id]).direct_upload_url
  end

  private

  def asset_params
    params.require(:asset).permit(:direct_upload_url)
  end

end
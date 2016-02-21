class AssetsController < ApplicationController

  def new
    @user = User.find(session[:user_id])
    @asset = Asset.new()
    render "assets/new", layout: false
  end

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

  def collection
    @assets = Asset.where(user_id: session[:user_id])
    render 'assets/collection', layout: false
  end

  private

  def asset_params
    params.require(:asset).permit(:direct_upload_url)
  end

end

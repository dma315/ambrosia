class AssetsController < ApplicationController

  def new
    set_s3_direct_post
    @user = User.find(session[:user_id])
    @asset = Asset.new
    # @experience = Experience.find(1)
    render "assets/new", layout: false
  end

  def create
    p params
    user = User.find(params[:user_id])
    @asset = user.assets.new(asset_params)
    @asset.experience_id = user.experiences.first.id # Lol hack
    @asset.save
    respond_to do |format|
      format.js { render nothing: true }
    end
    # redirect_to "/users/#{user.id}/assets"
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
    params.require(:asset).permit(:direct_upload_url, :caption)
  end

  def set_s3_direct_post
    @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
  end

end

class AssetsController < ApplicationController

  def new
    set_s3_direct_post
    @user = User.find(session[:user_id])
    @asset = Asset.new
    render "assets/new", layout: false
  end

  def create
    obj = S3_BUCKET.objects[params[:file].original_filename]
    obj.write(
      file: params[:file],
      acl: :public_read
    )
    user = User.find(params[:user_id])
    # @upload = Asset.create!(
    #   user: user,
    #   experience_id: user.experiences.first.id, # Refactor this later
    #   direct_upload_url: obj.public_url,
    #   caption: ""
    #   )
    @asset = user.assets.new(asset_params)
    @asset.direct_upload_url = obj.public_url
    if @asset.save
      respond_to do |format|
        format.json { render nothing: true }
        format.html { render nothing: true }
        format.js { render nothing: true }
      end
    else
      return 418
    end
  end

  def index
    user = User.find(params[:user_id])
    @assets_url = "/users/#{user.id}/assets"
  end

  def show
    user = User.find(params[:user_id])
    @asset = user.assets.find(params[:id]).direct_upload_url
  end

  def update
    @asset = Asset.find(params[:id])
    @asset.update_attributes(asset_params)
    respond_to do |format|
      format.js {}
    end
  end

  # Calvin, do we need this still?
  def collection
    @assets = Asset.where(user_id: session[:user_id])
    render 'assets/collection', layout: false
  end

  private

  def asset_params
    params.require(:assets).permit(:direct_upload_url, :caption, :experience_id)
  end

  def set_s3_direct_post
    @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/${filename}", success_action_status: '201', acl: 'public-read')
  end

end

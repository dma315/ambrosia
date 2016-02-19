class AssetsController < ApplicationController

  def new
  end

  def create
    # Make an object in your bucket for your upload
    experience = Experience.find_by(id: params[:experience_id])

    obj = BUCKET.objects[params[:file].original_filename]

    # Upload the file
    obj.write(
      file: params[:file],
      acl: :public_read
    )

    # Create an object for the upload
    @asset = Asset.new(
        link: obj.public_url,
        experience: experience
        # name: obj.key
        )

    # Save the upload
    if @asset.save
      redirect_to :back, success: 'File successfully uploaded'
    else
      flash.now[:notice] = 'There was an error'
      render :new
    end
  end

  def index
  end
end
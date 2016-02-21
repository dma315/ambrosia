class SessionsController < ApplicationController

  def new
    @user = User.new
    render "sessions/new", layout: false
  end

  def create
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      respond_to do |format|
        format.html { render nothing: true }
      end
      return 202
    else
      return 406
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end

  private
    def login_params
      params.require(:user).permit(:username, :password)
    end
end

class SessionsController < ApplicationController

  def new
    render "sessions/new", layout: false
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      return "Success"
    else
      @errors = ["Login credentials are invalid."]
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end
end

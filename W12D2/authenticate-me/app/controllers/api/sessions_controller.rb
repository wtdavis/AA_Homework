class Api::SessionsController < ApplicationController

def show
    # banana
    @user = current_user
    if @user
        render 'api/users/show'
        # render json: @user
    else
        render json: {user: nil}
    end
end

def create
    credential = params[:credential]
    password = params[:password]
    @user = User.find_by_credentials(credential, password)
# debugger
    if @user
        login!(@user)
        render 'api/users/show'
        # render json: @user
    else
        render json: {errors: ['Invalid credentials']}, status: :unauthorized
    end
end

def destroy
    logout!
    head :no_content
end
end

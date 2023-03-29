class Api::UsersController < ApplicationController
    before_action :require_logged_out

    wrap_parameters include: User.attribute_names + ['password']

    def create
        # render json: user_params
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            # render json: @user
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

   
    private 
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

    #user: {username: 'bob', password: 'bobobb'} -->> use helper method to nest params under user -->> wrap parameters

end

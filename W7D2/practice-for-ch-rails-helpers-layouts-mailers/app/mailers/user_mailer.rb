class UserMailer < ApplicationMailer
    default from: 'test@example.com'

    def welcome_email(user)
        @user = user
        @url = 'http://test@example.com/login'
        mail(to: user.email, subject: "good luck, we're all counting on you")
    end

    
end

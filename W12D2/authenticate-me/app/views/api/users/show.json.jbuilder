json.user do
    # debugger
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
end

class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :user_unable_to_create



    before_action :user_find_method,   except: [:index, :create]


    def index 
        render json: User.all
    end 


    #GET to /users/:id 
    def show 

        if user_find_method
            render json: user_find_method
        else
            user_not_found
        end 

    end 

    #Post 
    def create

        new_user = User.new( user_create_params )

        if new_user.save 

            render json: new_user

        else

            render json: { errors: new_user.errors.full_messages }

        end
    end 

    #update

    def update
    
        if user_find_method  

            if  user_find_method.update( user_update_params )
                render json: user_find_method
            else  

                render json: { errors: user_find_method.errors.full_messages }

            end

         else

            user_not_found

        end
    
    end 

    #delete 
    def destroy 

        if user_find_method

            destroy_response = user_find_method
            
         user_find_method.destroy

         render json: destroy_response.id
        
        else

            user_not_found

        end
    end

   





    private 

    #custom 
    def user_find_method

        user_to_find = User.find_by( id: params[:id] )

    end


    def user_not_found
        render json: { error: "User Not Found" }
    end


    #params
    def user_create_params
        params.permit(:name, :username, :email, :password)
    end

    def user_update_params
        params.permit(:name, :username, :email, :password)
    end

end

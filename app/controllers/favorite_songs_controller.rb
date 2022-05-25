class FavoriteSongsController < ApplicationController

    def index
        render json: FavoriteSong.all
    end 


end

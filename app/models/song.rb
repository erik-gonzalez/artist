class Song < ApplicationRecord

    has_many :artists
    has_many :users, through: :artists

end

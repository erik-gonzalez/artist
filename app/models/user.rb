class User < ApplicationRecord

    has_many :artists
    has_many :songs, through: :artists
    
    has_secure_password

end

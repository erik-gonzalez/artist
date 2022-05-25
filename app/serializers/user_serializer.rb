class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email
  has_many :artists, each_serializer: ArtistSerializer
  
end

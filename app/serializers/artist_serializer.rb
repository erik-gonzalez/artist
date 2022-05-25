class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :song 
  belongs_to :song

  def song 
    object.song
  end 


end

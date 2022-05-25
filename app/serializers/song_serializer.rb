class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :lyrics, :image

  has_many :artists

end

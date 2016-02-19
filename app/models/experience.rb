class Experience < ActiveRecord::Base
  has_many :assets
  belongs_to :user
end

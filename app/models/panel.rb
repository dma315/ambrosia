class Panel < ActiveRecord::Base
  has_many :assets
  belongs_to :experience
end

class Experience < ActiveRecord::Base
  has_many :assets
  belongs_to :user

  validates :title, :start_date, :user, presence: true
end

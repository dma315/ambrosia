class User < ActiveRecord::Base
	has_secure_password
	has_many :assets
  has_many :experiences

  validates :username, :email, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
end

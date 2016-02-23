class User < ActiveRecord::Base
	has_secure_password
	has_many :assets
  has_many :experiences

  validates :username, :email, prescene: true, uniqueness: true
end

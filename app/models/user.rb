class User < ActiveRecord::Base
	has_secure_password
	has_many :assets
  has_many :experiences
end

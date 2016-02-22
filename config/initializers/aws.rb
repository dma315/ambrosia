# require 'aws-sdk'
# require 'aws-sdk-resources'
# Rails.configuration.aws is used by AWS, Paperclip, and S3DirectUpload
# Rails.configuration.aws = YAML.load(ERB.new(File.read("#{Rails.root}/config/aws.yml")).result)[Rails.env].symbolize_keys!
# AWS.config(logger: Rails.logger)
# AWS.config(Rails.configuration.aws)
# AWS::S3::Base.establish_connection!(
#  :access_key_id   => ENV['S3_KEY'],
#  :secret_access_key => ENV['S3_SECRET']
# )


p Aws.config.update({
  region: 'us-west-2',
  credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
})

p S3_BUCKET = Aws::S3::Resource.new.bucket(ENV['S3_BUCKET'])

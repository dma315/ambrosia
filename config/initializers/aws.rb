AWS.config(
  :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
  :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
)

BUCKET =  AWS::S3.new.buckets[ENV['S3_BUCKET']]
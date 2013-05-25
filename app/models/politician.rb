class Politician < ActiveRecord::Base
  attr_accessible :description, :name, :party, :title, :uid, :phone, :email
  has_many :questions
  
end

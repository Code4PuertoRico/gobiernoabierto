class Politician < ActiveRecord::Base
  attr_accessible :description, :name, :party, :title
  has_many :questions
  
end

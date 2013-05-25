class Question < ActiveRecord::Base
  attr_accessible :title, :body, :rating, :politician_id
  belongs_to :politician

  def upvote
    self.rating += 1
    self.save    
  end

  def downvote
    self.rating -= 1
    self.save
  end
end

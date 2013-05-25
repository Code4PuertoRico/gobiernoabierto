class QuestionsController < ApplicationController
  def upvote
    @question = Question.find(params[:id])
    @question.upvote
  end

  def downvote
    @question = Question.find(params[:id])
    @question.downvote
  end

  def new
  end

  def create
  end


end

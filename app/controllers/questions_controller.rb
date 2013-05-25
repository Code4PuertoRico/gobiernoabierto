class QuestionsController < ApplicationController
  def upvote
    @question = Question.find(params[:id])
    @question.upvote
    redirect_to profiles_url(Politician.find(@question.politician_id))
  end

  def downvote
    @question = Question.find(params[:id])
    @question.downvote
    redirect_to profiles_url(Policitian.find(@question.politician_id))
  end

  def new
  end

  def create
  end


end

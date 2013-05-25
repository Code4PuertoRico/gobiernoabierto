class MainController < ApplicationController
  def index
    @politicians = Politician.all
  end

  def profile
    @politician = Politician.find(params[:id])
    @question = Question.new
  end

  def create_question
    @question = Question.new(params[:question])
    @question.save
    redirect_to profiles_url(Politician.find(params[:question][:politician_id]))
  end
end

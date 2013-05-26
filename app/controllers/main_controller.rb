class MainController < ApplicationController
  def index
    @politicians = Politician.all
  end

  def profile
    @politician = Politician.find(params[:id])
    @question = Question.new
  end

  def create_question
    @question = Question.new(:title => params[:title], :body => params[:body], :politician_id => params[:politician_id])
    @question.save
    redirect_to profiles_url(Politician.find(params[:politician_id]))
  end
end

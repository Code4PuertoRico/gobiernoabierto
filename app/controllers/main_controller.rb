class MainController < ApplicationController
  def index
  end

  def profile
    @politician = Politician.find(params[:id])
    @question = Question.new
  end

  def create_question
    @question = Question.new(params[:question])
    puts @question
    puts "================================"
    @question.save
    redirect_to root_path
  end
end

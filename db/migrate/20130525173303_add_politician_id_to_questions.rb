class AddPoliticianIdToQuestions < ActiveRecord::Migration
  def change
    add_column :questions, :politician_id, :integer
  end
end

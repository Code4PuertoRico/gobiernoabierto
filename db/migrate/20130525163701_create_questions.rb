class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.text :body
      t.integer :rating
      t.integer :politician_id

      t.timestamps
    end
  end
end

class CreatePoliticians < ActiveRecord::Migration
  def change
    create_table :politicians do |t|
      t.string :name
      t.string :title
      t.string :description
      t.string :party

      t.timestamps
    end
  end
end

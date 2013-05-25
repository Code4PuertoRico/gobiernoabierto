class CreatePoliticians < ActiveRecord::Migration
  def change
    create_table :politicians do |t|
      t.string :uid
      t.string :name
      t.string :title
      t.string :description
      t.string :party
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end

class DropSitesFromDatabase < ActiveRecord::Migration
  def change
  	drop_table :sites
  end
end

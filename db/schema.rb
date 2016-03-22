# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160321085953) do

  create_table "homes", force: :cascade do |t|
    t.string   "address"
    t.string   "postcode"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "city"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "state"
    t.integer  "street_number"
    t.string   "country"
    t.integer  "max_pets"
    t.string   "type_pet"
    t.string   "name"
    t.string   "surname"
    t.string   "email"
    t.integer  "phone_number"
    t.string   "title"
    t.string   "description"
  end

end

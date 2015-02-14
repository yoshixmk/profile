#require 'rubygems'
require 'open-uri'
require 'nokogiri'

doc = Nokogiri::HTML(open(
  "http://railstutorial.jp/chapters/sign-up?version=4.0#top"),nil,*"utf-8")
doc.css("h3").each do |h3|
  puts h3.text
end
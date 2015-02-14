require 'open-uri'
require 'nokogiri'

filename = ARGV[0]
doc = Nokogiri::HTML(open(filename),nil,*"utf-8")
doc.css("h3").each do |h3|
  puts h3.text
end
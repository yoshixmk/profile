require "stringio"

io = File.open("text_sample.txt")
words_count = 0
letter_count = 0

ary = io.readlines
ary.each do |line|
  words = line.split(/\s+/).join
  words_count += words.size
  letter_count += line.chomp.size
end
p io.lineno
p words_count
p letter_count

io.close
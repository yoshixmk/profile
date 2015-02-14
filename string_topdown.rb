require "stringio"

io = File.open("text_sample.txt", "r+")

ary = io.readlines
io.rewind
ary.each do |line|
    line.chomp!
    line.reverse!
    line << "\n"
    io.puts line
end

io.close
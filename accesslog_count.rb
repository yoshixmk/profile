count = 0
File.open(ARGV[0]) do |io|
  io.each_line do |line|
    count += 1
  end
end
puts count
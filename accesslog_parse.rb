CLF_REGEXP = /
  \A
  (\S+)\s
  (\S+)\s
  (\S+)\s
  \[([^\]]+)\]\s
  "(\S+)\s(\S+)\s(\S+)"\s
  (\d+)\s
  (\d+|-)\s
/x

count = 0
catting = 0
File.open(ARGV[0]) do |io|
  io.each_line do |line|
    if CLF_REGEXP =~ line
      p $~.captures
      catting += 1
    end
    count += 1
  end
end
puts
puts count
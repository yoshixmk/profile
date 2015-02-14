require "./access_log"

count = 0
File.open(ARGV[0]) do |io|
  AccessLog.each_entry(io) do |entry|
    p entry.to_a
    count += 1
  end
end
puts count
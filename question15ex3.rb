require "stringio"

def tail(range, filename)
  io = File.open(filename, "r")
  ary = io.readlines
  for i in ary.size-range..ary.size-1
    $stdout.print ary[i]
  end
  puts ""
  io.close
end

tail(3, "text_sample.txt")